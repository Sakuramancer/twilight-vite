import { HexedCanvas, useHexedCanvasContext } from "shared/ui";
import classes from "./ColorsHex.module.css";

const Canvas = ({ anchorPoint, anchorSize, colors, onClick }) => {
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

  return (
    <>
      <HexedCanvas.ColorLine
        className={classes.hex}
        anchorPoint={{ x: anchorSize, y: anchorPoint.y }}
        anchorSize={0.6 * anchorSize}
        colors={colors}
        onClick={onClick}
      />
    </>
  );
};

const ColorsHex = { Canvas };
export { ColorsHex };
