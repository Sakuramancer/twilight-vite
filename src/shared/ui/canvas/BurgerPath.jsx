import { useHexedCanvasContext } from "./HexedCanvasContext";

const data = [
  [-11, -8, 22],
  [-11, 0, 22],
  [-11, 8, 22],
];
const strokeWidth = 2;
const mult = 0.04;

const BurgerPath = ({ className, anchorPoint, anchorSize }) => {
  const context = useHexedCanvasContext();
  const resolvedAnchorPoint = anchorPoint ?? {
    x: 0.5 * context.width,
    y: 0.5 * context.height,
  };
  const resolvedAnchorSize = anchorSize ?? context.anchorSize;

  const path = data
    .map(
      ([x, y, h]) =>
        `M ${resolvedAnchorPoint.x + mult * resolvedAnchorSize * x},
      ${
        resolvedAnchorPoint.y + mult * resolvedAnchorSize * y
      } h ${mult * resolvedAnchorSize * h}`,
    )
    .join(" ");
  return (
    <path
      className={className}
      strokeWidth={mult * resolvedAnchorSize * strokeWidth}
      strokeLinecap="round"
      d={path}
    />
  );
};

export default BurgerPath;
