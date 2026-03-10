import { useHexedCanvasContext } from "./HexedCanvasContext";

const verticies = 6;
const angleMultiplier = (2 * Math.PI) / verticies;

const RelicPath = ({
  className,
  anchorPoint,
  anchorSize,
  sitOnEdge = true,
  ...props
}) => {
  const context = useHexedCanvasContext();
  if (!anchorPoint) {
    anchorPoint = { x: 0.5 * context.width, y: 0.25 * context.height };
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }

  const onEdgeAngle = sitOnEdge ? 0 : Math.PI / verticies;
  const path = [...Array(verticies).keys()]
    .map(
      (x) =>
        `${anchorPoint.x + anchorSize * Math.cos(angleMultiplier * x + onEdgeAngle)},
          ${
            2 * anchorPoint.y +
            2 * anchorSize * Math.sin(angleMultiplier * x + onEdgeAngle)
          }`,
    )
    .join(" ");
  return <path className={className} d={`M${path}z`} {...props} />;
};

export default RelicPath;
