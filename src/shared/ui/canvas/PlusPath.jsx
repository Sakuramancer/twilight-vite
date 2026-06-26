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
  if (!anchorPoint) {
    anchorPoint = { x: 0.5 * context.width, y: 0.5 * context.height };
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }
  const path = dataPoints
    .map(
      ([x, y]) =>
        `${anchorPoint.x + mult * anchorSize * x},
      ${anchorPoint.y + mult * anchorSize * y}`,
    )
    .join(" ");
  return <path className={className} d={`M${path}z`} {...props} />;
};

export default PlusPath;
