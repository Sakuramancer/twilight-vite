import classNames from "classnames/bind";
import { HexedCanvas, useHexedCanvasContext } from "shared/ui";
import classes from "./EmptyHex.module.css";

const cx = classNames.bind(classes);

const Canvas = ({ anchorPoint, anchorSize, type, muted, onClick }) => {
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
    "hex-interactive": onClick,
    "hex-muted": muted,
    [`hex-${type}-notMuted`]: !muted,
  });

  return (
    <HexedCanvas.Hex
      className={hexClass}
      anchorPoint={{ x: anchorSize, y: anchorPoint.y }}
      anchorSize={0.6 * anchorSize}
      onClick={onClick}
    />
  );
};

const Content = ({ type, content, contentVisible }) => {
  const contentClass = cx({
    content: true,
    [`content-${type}`]: true,
  });
  return <>{contentVisible && <div className={contentClass}>{content}</div>}</>;
};

const EmptyHex = { Canvas, Content };
export { EmptyHex };
