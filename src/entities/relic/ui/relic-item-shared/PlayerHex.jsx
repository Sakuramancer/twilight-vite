import classNames from "classnames/bind";
import HexedCanvas from "core/canvas/HexedCanvas";
import { useHexedCanvasContext } from "core/canvas/HexedCanvasContext";
import classes from "./PlayerHex.module.css";

const cx = classNames.bind(classes);

const Canvas = ({ anchorPoint, anchorSize, colorId, striped, onClick }) => {
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
    "hex-striped": striped,
    "hex-notStriped": !striped,
  });

  return (
    <>
      <HexedCanvas.StripesPattern colorId={colorId} />
      <HexedCanvas.Hex
        className={hexClass}
        anchorPoint={{ x: anchorSize, y: anchorPoint.y }}
        anchorSize={0.6 * anchorSize}
        onClick={onClick}
      />
    </>
  );
};

const Content = ({ visible }) => {
  return <>{visible && <div className={classes.noPlayer}>?</div>}</>;
};

const PlayerHex = { Canvas, Content };
export { PlayerHex };
