import { useHexedCanvasContext } from "./HexedCanvasContext";

const originData = [8, 10];
const outerDataPoints = [
  [2, 2, 2, -2, 0, -16],
  [2, 2, -2, -2, -16, 0],
  [2, 2, -2, 2, 0, 16],
  [2, 2, 2, 2, 16, 0],
];
const innerDataPoints = [
  [8, 8],
  [-8, 8],
  [-8, -8],
  [8, -8],
];
const circlesDataPoints = [
  [0, 0, 1.5],
  [4, 4, 1.5],
  [4, -4, 1.5],
  [-4, 4, 1.5],
  [-4, -4, 1.5],
];
const mult = 0.045;

const DicePath = ({ className, anchorPoint, anchorSize, ...props }) => {
  const context = useHexedCanvasContext();
  if (!anchorPoint) {
    anchorPoint = { x: 0.5 * context.width, y: 0.5 * context.height };
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }
  const circles = circlesDataPoints.map(([cx, cy, r]) => [
    anchorPoint.x + mult * anchorSize * cx,
    anchorPoint.y + mult * anchorSize * cy,
    mult * anchorSize * r,
  ]);
  const origin = `${anchorPoint.x + mult * anchorSize * originData[0]},${
    anchorPoint.y + mult * anchorSize * originData[1]
  }`;
  const outerPath = outerDataPoints
    .map(
      ([arx, ary, adx, ady, lx, ly]) =>
        `a ${mult * anchorSize * arx},${mult * anchorSize * ary} 0 0 0  ${
          mult * anchorSize * adx
        },${mult * anchorSize * ady} l ${mult * anchorSize * lx},${mult * anchorSize * ly}`,
    )
    .join(" ");

  const innerPath = innerDataPoints
    .map(
      ([x, y]) => `${anchorPoint.x + mult * anchorSize * x},
      ${anchorPoint.y + mult * anchorSize * y}`,
    )
    .join(" ");

  const path = `M${origin} ${outerPath} M${innerPath}z`;

  return (
    <>
      {circles.map(([cx, cy, r], index) => (
        <circle
          className={className}
          key={index}
          cx={cx}
          cy={cy}
          r={r}
          {...props}
        />
      ))}
      <path className={className} d={path} {...props} />;
    </>
  );
};

export default DicePath;
