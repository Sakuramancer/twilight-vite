import classNames from "classnames/bind";
import { HexedCanvas, useHexedCanvasContext } from "core/canvas";
import classes from "./DiceHex.module.css";

const cx = classNames.bind(classes);

const Canvas = ({ anchorPoint, anchorSize, muted, onClick }) => {
  const context = useHexedCanvasContext();
  if (!anchorPoint) {
    anchorPoint = context.anchorPoint ?? {
      x: 0.5 * context.width,
      y: 0.5 * context.height,
    };
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }

  const hexClass = cx({
    hex: true,
    "hex-interactive": onClick,
    "hex-muted": muted,
    "hex-notMuted": !muted,
  });

  return (
    <>
      <HexedCanvas.Hex
        className={hexClass}
        anchorPoint={{ x: anchorSize, y: anchorPoint.y }}
        anchorSize={0.6 * anchorSize}
        onClick={onClick}
      />
      {!muted && (
        <HexedCanvas.Dice
          className={classes.dice}
          anchorPoint={{ x: anchorSize, y: anchorPoint.y }}
          anchorSize={0.6 * anchorSize}
        />
      )}
    </>
  );
};

const DiceHex = { Canvas };
export { DiceHex };
