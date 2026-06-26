import { useHexedCanvasContext } from "./HexedCanvasContext";

const originData = [-4, 0];
const dataPoints = [
  [1, 1, -2, 2, 3, 3],
  [Math.sqrt(2), Math.sqrt(2), 2, 0, 7, -7],
  [1, 1, -2, -2, -6, 6],
];
const mult = 0.06;

const CheckPath = ({
  anchorPoint,
  anchorSize,
  fill = "whitesmoke",
  ...props
}) => {
  const context = useHexedCanvasContext();
  const resolvedAnchorPoint = anchorPoint ?? {
    x: 0.5 * context.width,
    y: 0.5 * context.height,
  };
  const resolvedAnchorSize = anchorSize ?? context.anchorSize;

  const origin = `${
    resolvedAnchorPoint.x + mult * resolvedAnchorSize * originData[0]
  },${resolvedAnchorPoint.y + mult * resolvedAnchorSize * originData[1]}`;
  const path = dataPoints
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
  return <path fill={fill} {...props} d={`M${origin} ${path}z`} />;
};

export default CheckPath;
