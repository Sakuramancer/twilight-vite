import { colorsStatic } from "../data/colors.data";
import HexPath from "./HexPath";
import { useHexedCanvasContext } from "./HexedCanvasContext";

const sqrt3 = Math.sqrt(3);
const dataPoints = [
  {
    colorId: "black",
    shift: { x: 0, y: 0 },
  },
  {
    colorId: "blue",
    shift: { x: 0, y: 1 },
  },
  {
    colorId: "orange",
    shift: { x: 0.5 * sqrt3, y: -0.5 },
  },
  {
    colorId: "red",
    shift: { x: -0.5 * sqrt3, y: -0.5 },
  },
  {
    colorId: "pink",
    shift: { x: 0.5 * sqrt3, y: 0.5 },
  },
  {
    colorId: "yellow",
    shift: { x: -0.5 * sqrt3, y: 0.5 },
  },
  {
    colorId: "green",
    shift: { x: sqrt3, y: 0 },
  },
  {
    colorId: "purple",
    shift: { x: -sqrt3, y: 0 },
  },
];

const coef = 1.08 * sqrt3;

const ColorHexes = ({ className, ...props }) => {
  const { width, height, anchorSize } = useHexedCanvasContext();
  const center = { x: 0.5 * width, y: 0.5 * height };

  return (
    <>
      {dataPoints.map(({ shift, colorId }) => {
        const [x, y] = [coef * shift.x, coef * shift.y];
        const color = colorsStatic[colorId];
        return (
          <HexPath
            className={className}
            {...props}
            id={colorId}
            key={colorId}
            anchorPoint={{
              x: center.x + anchorSize * x,
              y: center.y + anchorSize * y,
            }}
            anchorSize={anchorSize}
            fill={color.color}
          />
        );
      })}
    </>
  );
};

export default ColorHexes;
