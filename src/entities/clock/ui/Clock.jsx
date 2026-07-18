import { HexedCanvas, Clock as ClockUi } from "shared/ui";
import classes from "./Clock.module.css";

const anchorSize = 95;
const centerX = 1.05 * anchorSize;
const centerY = 1.1 * anchorSize;
const geometry = {
  width: 6 * anchorSize,
  height: 2 * centerY,
  anchorPoint: { x: centerX, y: centerY },
  anchorSize,
};

const Clock = ({ onClick }) => {
  return (
    <div className={classes.main} onClick={onClick}>
      <HexedCanvas className={classes.canvas} geometry={geometry}>
        <HexedCanvas.ExtendedHex className={classes.frame} />
      </HexedCanvas>
      <ClockUi className={classes.clock} />
    </div>
  );
};

export { Clock };
