import { PLAYER_COUNT } from "../config/defaults";
import HexPath from "./HexPath";
import { useHexedCanvasContext } from "./HexedCanvasContext";

const adjustFirstPlayerToTop = -2;

const PetalHexes = ({
  petalClasses,
  petalClickHandlers,
  spreadRadius,
  hexAnchorSize,
  ...props
}) => {
  const { width, height } = useHexedCanvasContext();
  const center = { x: 0.5 * width, y: 0.5 * height };

  return (
    <>
      {Array.from({ length: PLAYER_COUNT }, (_, index) => {
        const alpha = ((index + adjustFirstPlayerToTop + 0.5) * Math.PI) / 3;

        const hexAnchorPoint = {
          x: center.x + spreadRadius * Math.cos(alpha),
          y: center.y + spreadRadius * Math.sin(alpha),
        };

        return (
          <HexPath
            className={petalClasses[index]}
            key={index}
            {...props}
            anchorPoint={hexAnchorPoint}
            anchorSize={hexAnchorSize}
            onClick={petalClickHandlers[index]}
          />
        );
      })}
    </>
  );
};

export default PetalHexes;
