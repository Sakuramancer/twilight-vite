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
  if (!anchorPoint) {
    anchorPoint = { x: 0.5 * context.width, y: 0.5 * context.height };
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }

  const path = data
    .map(
      ([x, y, h]) =>
        `M ${anchorPoint.x + mult * anchorSize * x},
      ${anchorPoint.y + mult * anchorSize * y} h ${mult * anchorSize * h}`,
    )
    .join(" ");
  return (
    <path
      className={className}
      strokeWidth={mult * anchorSize * strokeWidth}
      strokeLinecap="round"
      d={path}
    />
  );
};

export default BurgerPath;
