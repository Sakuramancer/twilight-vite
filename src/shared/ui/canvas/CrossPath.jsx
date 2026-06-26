import { useHexedCanvasContext } from "./HexedCanvasContext";

const originData = [0, 2];
const dataPoints = [
  [3, 3, 1, 1, 2, -2, -3, -3],
  [3, -3, 1, 1, -2, -2, -3, 3],
  [-3, -3, 1, 1, -2, 2, 3, 3],
  [-3, 3, 1, 1, 2, 2, 3, -3],
];
const mult = 0.06;

const CrossPath = ({
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
      ([lx1, ly1, arx, ary, adx, ady, lx2, ly2]) =>
        ` l ${mult * resolvedAnchorSize * lx1},${
          mult * resolvedAnchorSize * ly1
        } a ${mult * resolvedAnchorSize * arx},${
          mult * resolvedAnchorSize * ary
        } 0 0 0  ${mult * resolvedAnchorSize * adx},${
          mult * resolvedAnchorSize * ady
        } l ${mult * resolvedAnchorSize * lx2},${
          mult * resolvedAnchorSize * ly2
        }`,
    )
    .join(" ");
  return <path fill={fill} {...props} d={`M${origin} ${path}z`} />;
};

export default CrossPath;
