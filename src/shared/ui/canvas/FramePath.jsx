import { useHexedCanvasContext } from "./HexedCanvasContext";

const verticies = 6;
const angleMultiplier = (2 * Math.PI) / verticies;

const FramePath = ({
  className,
  anchorPoint,
  widthExtender,
  heightExtender,
  anchorSize,
  ...props
}) => {
  const context = useHexedCanvasContext();
  const resolvedAnchorPoint = anchorPoint ?? {
    x: 0.5 * context.width,
    y: 0.5 * context.height,
  };

  const resolvedWidthExtender =
    widthExtender ?? 0.5 * context.width - 1.1 * context.anchorSize;

  const resolvedHeightExtender =
    heightExtender ?? 0.5 * context.height - 1.1 * context.anchorSize;

  const resolvedAnchorSize = anchorSize ?? context.anchorSize;

  const path = [...Array(verticies).keys()]
    .map((x) => {
      const cos = Math.cos(angleMultiplier * x);
      const sin = Math.sin(angleMultiplier * x);
      const extendWidth =
        cos > 0 ? resolvedWidthExtender : -resolvedWidthExtender;
      const extendHeight =
        sin > 0 ? resolvedHeightExtender : -resolvedHeightExtender;
      if (cos > -0.01 && cos < 0.01) {
        return (
          `${resolvedAnchorPoint.x + sin * resolvedWidthExtender},
            ${resolvedAnchorPoint.y + resolvedAnchorSize * sin + extendHeight}` +
          ` ${resolvedAnchorPoint.x - sin * resolvedWidthExtender},
            ${resolvedAnchorPoint.y + resolvedAnchorSize * sin + extendHeight}`
        );
      }
      if (sin > -0.01 && sin < 0.01) {
        return (
          `${resolvedAnchorPoint.x + resolvedAnchorSize * cos + extendWidth},
            ${resolvedAnchorPoint.y - cos * resolvedHeightExtender}` +
          ` ${resolvedAnchorPoint.x + resolvedAnchorSize * cos + extendWidth},
            ${resolvedAnchorPoint.y + cos * resolvedHeightExtender}`
        );
      }
      return `${resolvedAnchorPoint.x + resolvedAnchorSize * cos + extendWidth},
          ${resolvedAnchorPoint.y + resolvedAnchorSize * sin + extendHeight}`;
    })
    .join(" ");
  return <path className={className} d={`M${path}z`} {...props} />;
};

export default FramePath;
