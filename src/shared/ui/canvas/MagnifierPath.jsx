import { useHexedCanvasContext } from "./HexedCanvasContext";

const data = { cx: -2, cy: -2, r: 9, strokeWidth: 2, line1: 5, line2: 11 };
const mult = 0.04;

const MagnifierPath = ({ className, anchorPoint, anchorSize }) => {
  const context = useHexedCanvasContext();
  if (!anchorPoint) {
    anchorPoint = { x: 0.5 * context.width, y: 0.5 * context.height };
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }

  return (
    <>
      <circle
        className={className}
        cx={anchorPoint.x + mult * anchorSize * data.cx}
        cy={anchorPoint.y + mult * anchorSize * data.cy}
        r={mult * anchorSize * data.r}
        strokeWidth={mult * anchorSize * data.strokeWidth}
        fill="none"
      />
      <path
        className={className}
        strokeWidth={mult * anchorSize * data.strokeWidth}
        strokeLinecap="round"
        d={`M ${anchorPoint.x + mult * anchorSize * data.line1} ${
          anchorPoint.y + mult * anchorSize * data.line1
        } L ${anchorPoint.x + mult * anchorSize * data.line2} ${
          anchorPoint.y + mult * anchorSize * data.line2
        }`}
      />
    </>
  );
};

export default MagnifierPath;
