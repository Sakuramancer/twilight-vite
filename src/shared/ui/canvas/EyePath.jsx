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
  const resolvedAnchorPoint = anchorPoint ?? {
    x: 0.5 * context.width,
    y: 0.5 * context.height,
  };
  const resolvedAnchorSize = anchorSize ?? context.anchorSize;

  const path = dataPoints
    .map(
      ([r, dx, dy]) =>
        `a ${mult * resolvedAnchorSize * r} ${
          mult * resolvedAnchorSize * r
        } 0 0 0 ${mult * resolvedAnchorSize * dx} ${
          mult * resolvedAnchorSize * dy
        }`,
    )
    .join(" ");

  return (
    <>
      <circle
        className={className}
        cx={resolvedAnchorPoint.x}
        cy={resolvedAnchorPoint.y}
        r={mult * resolvedAnchorSize * circleRadius}
        strokeWidth={mult * resolvedAnchorSize * strokeWidth}
        fill="none"
      />
      <path
        className={className}
        fill="none"
        strokeWidth={mult * resolvedAnchorSize * strokeWidth}
        strokeLinecap="round"
        d={`M ${resolvedAnchorPoint.x + mult * resolvedAnchorSize * origin.x} ${
          resolvedAnchorPoint.y + mult * resolvedAnchorSize * origin.y
        } ${path}`}
      />
    </>
  );
};

export default EyePath;
