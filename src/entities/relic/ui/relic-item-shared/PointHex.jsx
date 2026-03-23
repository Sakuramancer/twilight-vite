import classNames from "classnames/bind";
import { HexedCanvas, useHexedCanvasContext } from "core/canvas";
import classes from "./PointHex.module.css";

const cx = classNames.bind(classes);

const Canvas = ({ anchorPoint, anchorSize, colored, onClick }) => {
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

  const pointHexClass = cx({
    hex: true,
    "hex-interactive": onClick,
    "hex-colored": colored,
    "hex-notColored": !colored,
  });

  return (
    <HexedCanvas.Hex
      className={pointHexClass}
      anchorPoint={{ x: 8.9 * anchorSize, y: anchorPoint.y }}
      anchorSize={0.75 * anchorSize}
      onClick={onClick}
    />
  );
};

const Content = ({ colored }) => {
  const pointClass = cx({
    point: true,
    "point-colored": colored,
    "point-notColored": !colored,
  });

  return <div className={pointClass}>1</div>;
};

const PointHex = { Canvas, Content };

export { PointHex };
