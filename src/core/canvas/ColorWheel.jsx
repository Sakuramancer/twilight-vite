import classNames from "classnames/bind";
import HexPath from "./HexPath";
import { useHexedCanvasContext } from "./HexedCanvasContext";
import colors from "../data/colors.module.css";

const colorx = classNames.bind(colors);

const sqrt3 = Math.sqrt(3);
const dataPoints = [
  { x: 0, y: -1 },
  { x: 0.5 * sqrt3, y: -0.5 },
  { x: 0.5 * sqrt3, y: 0.5 },
  { x: 0, y: 1 },
  { x: -0.5 * sqrt3, y: 0.5 },
  { x: -0.5 * sqrt3, y: -0.5 },
];

const coef = 1.08 * sqrt3;

const ColorWheel = ({ className, colors, sizeCoef = 1, onClick, ...props }) => {
  const { width, height, anchorSize } = useHexedCanvasContext();
  const center = { x: 0.5 * width, y: 0.5 * height };

  const getPetalClass = (index) =>
    colorx(className, {
      [colors[index].colorId]: true,
    });

  return (
    <>
      {dataPoints.map(({ x, y }, index) => {
        return (
          <HexPath
            className={getPetalClass(index)}
            {...props}
            id={index}
            key={index}
            anchorPoint={{
              x: center.x + anchorSize * coef * x,
              y: center.y + anchorSize * coef * y,
            }}
            anchorSize={sizeCoef * anchorSize}
            onClick={() => onClick(index)}
          />
        );
      })}
    </>
  );
};

export default ColorWheel;
