import classNames from "classnames/bind";
import HexedCanvas from "core/canvas/HexedCanvas";
import { useHexedCanvasContext } from "core/canvas/HexedCanvasContext";
import classes from "./TitleHex.module.css";

const cx = classNames.bind(classes);

const Canvas = ({ anchorPoint, anchorSize, muted, redpainted, onClick }) => {
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

  const extendedHexClass = cx({
    extendedHex: true,
    "extendedHex-interactive": onClick,
    "extendedHex-redpainted": redpainted,
    "extendedHex-muted": muted,
    "extendedHex-notMuted": !muted,
  });

  return (
    <HexedCanvas.ExtendedHex
      className={extendedHexClass}
      anchorPoint={{ x: 5 * anchorSize, y: anchorPoint.y }}
      anchorSize={anchorSize}
      onClick={onClick}
    />
  );
};

const Content = ({ title, centered, muted }) => {
  const titleClass = cx({
    title: true,
    "title-centered": centered,
    "title-alignLeft": !centered,
    "title-muted": muted,
    "title-notMuted": !muted,
  });

  return <div className={titleClass}>{title}</div>;
};

const TitleHex = { Canvas, Content };

export { TitleHex };
