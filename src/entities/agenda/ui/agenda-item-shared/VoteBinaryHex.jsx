import { HexedCanvas, useHexedCanvasContext } from "shared/ui";
import classes from "./VoteBinaryHex.module.css";

const Canvas = ({ anchorPoint, anchorSize, onClick}) => {
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
      <HexedCanvas.BinaryLine
        hexCheckClass={classes.hexCheck}
        hexCrossClass={classes.hexCross}
        checkClass={classes.check}
        crossClass={classes.cross}
        anchorPoint={{ x: anchorSize, y: anchorPoint.y }}
        anchorSize={0.6 * anchorSize}
        onCheckClick={() => onClick(1)}
        onCrossClick={() => onClick(0)}
      />
    </>
  );
};

const VoteBinaryHex = { Canvas };
export { VoteBinaryHex };
