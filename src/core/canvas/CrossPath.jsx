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
  if (!anchorPoint) {
    anchorPoint = { x: 0.5 * context.width, y: 0.5 * context.height };
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }
  const origin = `${anchorPoint.x + mult * anchorSize * originData[0]},${
    anchorPoint.y + mult * anchorSize * originData[1]
  }`;
  const path = dataPoints
    .map(
      ([lx1, ly1, arx, ary, adx, ady, lx2, ly2]) =>
        ` l ${mult * anchorSize * lx1},${
          mult * anchorSize * ly1
        } a ${mult * anchorSize * arx},${mult * anchorSize * ary} 0 0 0  ${
          mult * anchorSize * adx
        },${
          mult * anchorSize * ady
        } l ${mult * anchorSize * lx2},${mult * anchorSize * ly2}`,
    )
    .join(" ");
  return <path fill={fill} {...props} d={`M${origin} ${path}z`} />;
};

export default CrossPath;
