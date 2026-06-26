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
  if (!anchorPoint) {
    anchorPoint = { x: 0.5 * context.width, y: 0.5 * context.height };
  }
  if (!widthExtender) {
    widthExtender = 0.5 * context.width - 1.1 * context.anchorSize;
  }
  if (!heightExtender) {
    heightExtender = 0.5 * context.height - 1.1 * context.anchorSize;
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }

  const path = [...Array(verticies).keys()]
    .map((x) => {
      const cos = Math.cos(angleMultiplier * x);
      const sin = Math.sin(angleMultiplier * x);
      const extendWidth = cos > 0 ? widthExtender : -widthExtender;
      const extendHeight = sin > 0 ? heightExtender : -heightExtender;
      if (cos > -0.01 && cos < 0.01) {
        return (
          `${anchorPoint.x + sin * widthExtender},
            ${anchorPoint.y + anchorSize * sin + extendHeight}` +
          ` ${anchorPoint.x - sin * widthExtender},
            ${anchorPoint.y + anchorSize * sin + extendHeight}`
        );
      }
      if (sin > -0.01 && sin < 0.01) {
        return (
          `${anchorPoint.x + anchorSize * cos + extendWidth},
            ${anchorPoint.y - cos * heightExtender}` +
          ` ${anchorPoint.x + anchorSize * cos + extendWidth},
            ${anchorPoint.y + cos * heightExtender}`
        );
      }
      return `${anchorPoint.x + anchorSize * cos + extendWidth},
          ${anchorPoint.y + anchorSize * sin + extendHeight}`;
    })
    .join(" ");
  return <path className={className} d={`M${path}z`} {...props} />;
};

export default FramePath;
