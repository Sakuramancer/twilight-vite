import { HexedCanvas } from "core/canvas";
import classes from "./RandomRelicButton.module.css";

const anchorSize = 95;
const centerX = 1.05 * anchorSize;
const centerY = 1.1 * anchorSize;
const geometry = {
  width: 10 * anchorSize,
  height: 2 * centerY,
  anchorPoint: { x: centerX, y: centerY },
  anchorSize,
};

const RandomRelicButton = ({ onClick }) => {
  return (
    <div className={classes.button}>
      <HexedCanvas geometry={geometry}>
        <HexedCanvas.ExtendedHex
          className={classes.buttonFrame}
          onClick={onClick}
        />
        <HexedCanvas.Dice
          className={classes.dice}
          anchorPoint={{ x: 1.2 * anchorSize, y: centerY }}
        />
      </HexedCanvas>
      <div className={classes.content}>Случайный выбор</div>
    </div>
  );
};

export default RandomRelicButton;
