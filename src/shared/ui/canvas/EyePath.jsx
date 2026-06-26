import { useHexedCanvasContext } from "./HexedCanvasContext";

const origin = { x: 18, y: 0 };
const dataPoints = [
  [25, -36, 0],
  [25, 36, 0],
];
const circleRadius = 6;
const strokeWidth = 2;
const mult = 0.04;

const EyePath = ({ className, anchorPoint, anchorSize }) => {
  const context = useHexedCanvasContext();
  if (!anchorPoint) {
    anchorPoint = { x: 0.5 * context.width, y: 0.5 * context.height };
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }
  const path = dataPoints
    .map(
      ([r, dx, dy]) =>
        `a ${mult * anchorSize * r} ${mult * anchorSize * r} 0 0 0 ${mult * anchorSize * dx} ${
          mult * anchorSize * dy
        }`,
    )
    .join(" ");

  return (
    <>
      <circle
        className={className}
        cx={anchorPoint.x}
        cy={anchorPoint.y}
        r={mult * anchorSize * circleRadius}
        strokeWidth={mult * anchorSize * strokeWidth}
        fill="none"
      />
      <path
        className={className}
        fill="none"
        strokeWidth={mult * anchorSize * strokeWidth}
        strokeLinecap="round"
        d={`M ${anchorPoint.x + mult * anchorSize * origin.x} ${
          anchorPoint.y + mult * anchorSize * origin.y
        } ${path}`}
      />
    </>
  );
};

export default EyePath;
