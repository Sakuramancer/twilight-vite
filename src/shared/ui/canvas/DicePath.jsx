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
  const resolvedAnchorPoint = anchorPoint ?? {
    x: 0.5 * context.width,
    y: 0.5 * context.height,
  };
  const resolvedAnchorSize = anchorSize ?? context.anchorSize;

  const circles = circlesDataPoints.map(([cx, cy, r]) => [
    resolvedAnchorPoint.x + mult * resolvedAnchorSize * cx,
    resolvedAnchorPoint.y + mult * resolvedAnchorSize * cy,
    mult * resolvedAnchorSize * r,
  ]);
  const origin = `${
    resolvedAnchorPoint.x + mult * resolvedAnchorSize * originData[0]
  },${resolvedAnchorPoint.y + mult * resolvedAnchorSize * originData[1]}`;
  const outerPath = outerDataPoints
    .map(
      ([arx, ary, adx, ady, lx, ly]) =>
        `a ${mult * resolvedAnchorSize * arx},${
          mult * resolvedAnchorSize * ary
        } 0 0 0  ${mult * resolvedAnchorSize * adx},${
          mult * resolvedAnchorSize * ady
        } l ${mult * resolvedAnchorSize * lx},${
          mult * resolvedAnchorSize * ly
        }`,
    )
    .join(" ");

  const innerPath = innerDataPoints
    .map(
      ([x, y]) => `${resolvedAnchorPoint.x + mult * resolvedAnchorSize * x},
      ${resolvedAnchorPoint.y + mult * resolvedAnchorSize * y}`,
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
