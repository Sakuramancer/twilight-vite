import { useHexedCanvasContext } from "./HexedCanvasContext";

const verticies = 6;
const angleMultiplier = (2 * Math.PI) / verticies;

const HexPath = ({
  className,
  anchorPoint,
  anchorSize,
  sitOnEdge = true,
  ...props
}) => {
  const context = useHexedCanvasContext();
  const resolvedAnchorPoint = anchorPoint ?? {
    x: 0.5 * context.width,
    y: 0.5 * context.height,
  };
  const resolvedAnchorSize = anchorSize ?? context.anchorSize;

  const onEdgeAngle = sitOnEdge ? 0 : Math.PI / verticies;
  const path = [...Array(verticies).keys()]
    .map(
      (x) =>
        `${
          resolvedAnchorPoint.x +
          resolvedAnchorSize * Math.cos(angleMultiplier * x + onEdgeAngle)
        },
          ${
            resolvedAnchorPoint.y +
            resolvedAnchorSize * Math.sin(angleMultiplier * x + onEdgeAngle)
          }`,
    )
    .join(" ");
  return <path className={className} d={`M${path}z`} {...props} />;
};

export default HexPath;
