import { useHexedCanvasContext } from "./HexedCanvasContext";

const dataPoints = [
  [-1, -1],
  [-1, -10],
  [1, -10],
  [1, -1],
  [10, -1],
  [10, 1],
  [1, 1],
  [1, 10],
  [-1, 10],
  [-1, 1],
  [-10, 1],
  [-10, -1],
];
const mult = 0.035;

const PlusPath = ({ className, anchorPoint, anchorSize, ...props }) => {
  const context = useHexedCanvasContext();
  const resolvedAnchorPoint = anchorPoint ?? {
    x: 0.5 * context.width,
    y: 0.5 * context.height,
  };
  const resolvedAnchorSize = anchorSize ?? context.anchorSize;

  const path = dataPoints
    .map(
      ([x, y]) =>
        `${resolvedAnchorPoint.x + mult * resolvedAnchorSize * x},
      ${resolvedAnchorPoint.y + mult * resolvedAnchorSize * y}`,
    )
    .join(" ");
  return <path className={className} d={`M${path}z`} {...props} />;
};

export default PlusPath;
