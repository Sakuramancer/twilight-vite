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
      ([arx, ary, adx, ady, lx, ly]) =>
        `a ${mult * anchorSize * arx},${mult * anchorSize * ary} 0 0 0  ${
          mult * anchorSize * adx
        },${mult * anchorSize * ady} l ${mult * anchorSize * lx},${mult * anchorSize * ly}`,
    )
    .join(" ");
  return <path fill={fill} {...props} d={`M${origin} ${path}z`} />;
};

export default CheckPath;
