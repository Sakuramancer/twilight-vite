import classNames from "classnames/bind";
import { HexedCanvas, useHexedCanvasContext } from "core/canvas";
import classes from "./FrameHex.module.css";

const cx = classNames.bind(classes);

const Canvas = ({ anchorPoint, anchorSize, muted, onClick }) => {
  const context = useHexedCanvasContext();
  if (!anchorPoint) {
    anchorPoint = { x: 0.5 * context.width, y: 0.5 * context.height };
  }
  if (!anchorSize) {
    anchorSize = context.anchorSize;
  }

  const frameClass = cx({
    frame: true,
    "frame-interactive": onClick,
    "frame-muted": muted,
    "frame-notMuted": !muted,
  });

  return (
    <HexedCanvas.Frame
      className={frameClass}
      anchorPoint={anchorPoint}
      anchorSize={anchorSize}
      onClick={onClick}
    />
  );
};

const Content = ({ description, label, muted }) => {
  const containerClass = cx({
    container: true,
    "container-muted": muted,
    "container-notMuted": !muted,
  });

  return (
    <div className={containerClass}>
      <div className={classes.content}>
        <div className={classes.description}>
          {description.map((line, index) => (
            <p className={classes.p} key={index}>
              {line}
            </p>
          ))}
        </div>
        <div className={classes.label}>{label}</div>
      </div>
    </div>
  );
};

const FrameHex = { Canvas, Content };
export { FrameHex };
