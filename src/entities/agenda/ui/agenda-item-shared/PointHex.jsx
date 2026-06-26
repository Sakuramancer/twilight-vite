import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { HexedCanvas, useHexedCanvasContext } from "shared/ui";
import classes from "./PointHex.module.css";

const cx = classNames.bind(classes);

const Canvas = ({
  anchorPoint,
  anchorSize,
  colored,
  colorId,
  type,
  muted,
  onClick,
}) => {
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

  const mutedClass = muted ? "muted" : "notMuted";
  const pointHexClass = cx({
    hex: true,
    [colorClasses[colorId]]: true,
    "hex-interactive": onClick,
    [`hex-${type}`]: true,
    [`hex-colored-${mutedClass}`]: colored,
    "hex-notColored": !colored,
  });

  return (
    <HexedCanvas.Hex
      className={pointHexClass}
      anchorPoint={{ x: 9 * anchorSize, y: anchorPoint.y }}
      anchorSize={0.6 * anchorSize}
      onClick={onClick}
    />
  );
};

const Content = ({ colorId, colored, type }) => {
  const pointClass = cx({
    point: true,
    [colorClasses[colorId]]: true,
    "point-colored": colored,
    [`point-notColored-${type}`]: !colored,
  });

  return <div className={pointClass}>1</div>;
};

const PointHex = { Canvas, Content };
export { PointHex };
