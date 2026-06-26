import classNames from "classnames/bind";
import { HexedCanvas, useHexedCanvasContext } from "shared/ui";
import classes from "./BinaryHex.module.css";

const cx = classNames.bind(classes);

const Canvas = ({
  anchorPoint,
  anchorSize,
  pointVisible,
  muted,
  voting,
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
  const votedClass =
    voting > -1 ? (voting === 1 ? "votedFor" : "votedAgainst") : "notVoted";

  const showCheck = !pointVisible && voting === 1;
  const showCross = !pointVisible && voting === 0;

  const hexClass = cx({
    hex: true,
    "hex-interactive": onClick,
    [`hex-${mutedClass}-${votedClass}`]: true,
  });

  const checkClass = cx({
    noEvents: true,
    [`check-${mutedClass}`]: true,
  });

  const crossClass = cx({
    noEvents: true,
    [`cross-${mutedClass}`]: true,
  });

  return (
    <>
      <HexedCanvas.Hex
        className={hexClass}
        anchorPoint={{ x: anchorSize, y: anchorPoint.y }}
        anchorSize={0.6 * anchorSize}
        onClick={onClick}
      />
      {showCheck && (
        <HexedCanvas.Check
          className={checkClass}
          anchorPoint={{ x: anchorSize, y: anchorPoint.y }}
          anchorSize={0.7 * anchorSize}
        />
      )}
      {showCross && (
        <HexedCanvas.Cross
          className={crossClass}
          anchorPoint={{ x: anchorSize, y: anchorPoint.y }}
          anchorSize={0.7 * anchorSize}
        />
      )}
    </>
  );
};

const Content = ({ pointVisible, voting, muted }) => {
  const point = voting > -1 ? (voting === 1 ? "+1" : "-1") : "0";
  const votedClass =
    voting > -1 ? (voting === 1 ? "votedFor" : "votedAgainst") : "notVoted";
  const mutedClass = muted ? "muted" : "notMuted";
  const pointClass = cx({
    point: true,
    [`point-${votedClass}-${mutedClass}`]: true,
  });

  return <>{pointVisible && <div className={pointClass}>{point}</div>}</>;
};

const BinaryHex = { Canvas, Content };
export { BinaryHex };
