import classNames from "classnames/bind";
import { HexedCanvas, useHexedCanvasContext } from "core/canvas";
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

const Content = ({ title, titleVisible, centered, muted }) => {
  const titleClass = cx({
    title: true,
    "title-centered": centered,
    "title-alignLeft": !centered,
    "title-muted": muted,
    "title-notMuted": !muted,
  });

  return <>{titleVisible && <div className={titleClass}>{title}</div>}</>;
};

const TitleHex = { Canvas, Content };

export { TitleHex };
