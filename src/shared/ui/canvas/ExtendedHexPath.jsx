import { useHexedCanvasContext } from "./HexedCanvasContext";

const verticies = 6;
const angleMultiplier = (2 * Math.PI) / verticies;

const ExtendedHexPath = ({
  className,
  anchorPoint,
  length,
  anchorSize,
  ...props
}) => {
  const context = useHexedCanvasContext();
  const resolvedAnchorPoint = anchorPoint ?? {
    x: 0.5 * context.width,
    y: 0.5 * context.height,
  };
  const resolvedAnchorSize = anchorSize ?? context.anchorSize;
  const resolvedLength =
    length ?? 0.5 * context.width - 1.1 * context.anchorSize;

  const path = [...Array(verticies).keys()]
    .map((x) => {
      const cos = Math.cos(angleMultiplier * x);
      const extend = cos > 0 ? resolvedLength : -resolvedLength;
      return `${resolvedAnchorPoint.x + resolvedAnchorSize * cos + extend},
          ${
            resolvedAnchorPoint.y +
            resolvedAnchorSize * Math.sin(angleMultiplier * x)
          }`;
    })
    .join(" ");
  return <path className={className} d={`M${path}z`} {...props} />;
};

export default ExtendedHexPath;
