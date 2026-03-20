import classNames from "classnames/bind";
import HexedCanvas from "core/canvas/HexedCanvas";
import { useHexedCanvasContext } from "core/canvas/HexedCanvasContext";
import classes from "./ColorsHex.module.css";

const cx = classNames.bind(classes);

const Canvas = ({ anchorPoint, anchorSize, colors, onClick }) => {
  const context = useHexedCanvasContext();
  if (!anchorPoint) {
    anchorPoint = context.anchorPoint ?? {
      x: 0.5 * context.width,
      y: 0.5 * context.height,
    };
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }

  const hexClass = cx({
    hex: true,
  });

  return (
    <>
      <HexedCanvas.ColorLine
        className={hexClass}
        anchorPoint={{ x: anchorSize, y: anchorPoint.y }}
        anchorSize={0.6 * anchorSize}
        colors={colors}
        onClick={onClick}
      />
    </>
  );
};

const ColorsHex = { Canvas };
export { ColorsHex };
