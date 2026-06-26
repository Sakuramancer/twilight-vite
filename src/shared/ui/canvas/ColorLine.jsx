import classNames from "classnames/bind";
import HexPath from "./HexPath";
import StripesPattern from "./StripesPattern";
import { useHexedCanvasContext } from "./HexedCanvasContext";
import { PLAYER_COUNT } from "../../config/player-count";
import colorClasses from "../../config/colors.module.css";

const colorx = classNames.bind(colorClasses);

const sqrt3 = Math.sqrt(3);
const coef = 1.28 * sqrt3;
const defaultColorClassNames = Array.from(
  { length: PLAYER_COUNT },
  (_) => ({}),
);

const ColorLine = ({
  className,
  colorClassNames = defaultColorClassNames,
  leftAnchor = true,
  anchorPoint,
  anchorSize,
  colors,
  sizeCoef = 1,
  onClick,
  ...props
}) => {
  const context = useHexedCanvasContext();
  if (!anchorPoint) {
    anchorPoint = { x: 0.5 * context.width, y: 0.5 * context.height };
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }

  const anchorShift = leftAnchor ? 1 : 0;
  const getPetalClass = colors
    ? (index) =>
        colorx(className, colorClassNames[index], {
          [colors[index].colorId]: true,
        })
    : (index) => colorx(className, colorClassNames[index]);

  return (
    <>
      {Array.from({ length: PLAYER_COUNT }, (_, index) => {
        return (
          <g key={index}>
            {colors && <StripesPattern colorId={colors[index].colorId} />}
            <HexPath
              className={getPetalClass(index)}
              {...props}
              anchorPoint={{
                x: anchorPoint.x + anchorSize * coef * (index + anchorShift),
                y: anchorPoint.y,
              }}
              anchorSize={sizeCoef * anchorSize}
              onClick={() => onClick(index)}
            />
          </g>
        );
      })}
    </>
  );
};

export default ColorLine;
