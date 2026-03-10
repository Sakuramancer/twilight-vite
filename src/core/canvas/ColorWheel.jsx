import HexPath from "./HexPath";
import { useHexedCanvasContext } from "./HexedCanvasContext";
import { colorsStatic } from "../data/colors.data";

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

const ColorWheel = ({ className, colors, onClick, ...props }) => {
  const { width, height, anchorSize } = useHexedCanvasContext();
  const center = { x: 0.5 * width, y: 0.5 * height };

  return (
    <>
      {dataPoints.map(({ x, y }, index) => {
        return (
          <HexPath
            className={className}
            {...props}
            id={index}
            key={index}
            anchorPoint={{
              x: center.x + anchorSize * coef * x,
              y: center.y + anchorSize * coef * y,
            }}
            anchorSize={anchorSize}
            fill={colorsStatic[colors[index].colorId].color}
            onClick={() => onClick(index)}
          />
        );
      })}
    </>
  );
};

export default ColorWheel;
