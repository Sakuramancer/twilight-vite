import classNames from "classnames/bind";
import HexPath from "./HexPath";
import { useHexedCanvasContext } from "./HexedCanvasContext";
import { PLAYER_COUNT } from "../player/defaults";
import colorsStatic from "../data/colors.module.css";

const colorx = classNames.bind(colorsStatic);

const sqrt3 = Math.sqrt(3);
const coef = 1.28 * sqrt3;

const ColorLine = ({
  className,
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

  const getPetalClass = (index) =>
    colorx(className, {
      [colors[index].colorId]: true,
    });

  return (
    <>
      {Array.from({ length: PLAYER_COUNT }, (_, index) => {
        return (
          <HexPath
            className={getPetalClass(index)}
            {...props}
            id={index}
            key={index}
            anchorPoint={{
              x: anchorPoint.x + anchorSize * coef * (index + 1),
              y: anchorPoint.y,
            }}
            anchorSize={sizeCoef * anchorSize}
            onClick={() => onClick(index)}
          />
        );
      })}
    </>
  );
};

export default ColorLine;
