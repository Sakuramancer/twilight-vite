import HexPath from "./HexPath";
import CheckPath from "./CheckPath";
import CrossPath from "./CrossPath";
import { useHexedCanvasContext } from "./HexedCanvasContext";
import { PLAYER_COUNT } from "../../config/player-count";

const sqrt3 = Math.sqrt(3);
const coef = 1.28 * sqrt3;

const BinaryLine = ({
  hexCheckClass,
  hexCrossClass,
  checkClass,
  crossClass,
  anchorPoint,
  anchorSize,
  sizeCoef = 1,
  onCheckClick,
  onCrossClick,
  ...props
}) => {
  const context = useHexedCanvasContext();
  if (!anchorPoint) {
    anchorPoint = { x: 0.5 * context.width, y: 0.5 * context.height };
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }

  return (
    <>
      <HexPath
        className={hexCheckClass}
        {...props}
        anchorPoint={{
          x: anchorPoint.x + anchorSize * coef,
          y: anchorPoint.y,
        }}
        anchorSize={sizeCoef * anchorSize}
        onClick={onCheckClick}
      />
      <CheckPath
        className={checkClass}
        {...props}
        anchorPoint={{
          x: anchorPoint.x + anchorSize * coef,
          y: anchorPoint.y,
        }}
        anchorSize={sizeCoef * anchorSize}
      />
      <HexPath
        className={hexCrossClass}
        {...props}
        anchorPoint={{
          x: anchorPoint.x + 2 * anchorSize * coef,
          y: anchorPoint.y,
        }}
        anchorSize={sizeCoef * anchorSize}
        onClick={onCrossClick}
      />
      <CrossPath
        className={crossClass}
        {...props}
        anchorPoint={{
          x: anchorPoint.x + 2 * anchorSize * coef,
          y: anchorPoint.y,
        }}
        anchorSize={sizeCoef * anchorSize}
      />
    </>
  );
};

export default BinaryLine;
