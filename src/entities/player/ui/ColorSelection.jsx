import { useStore } from "shared/store";
import { HexedCanvas } from "shared/ui";
import { playerSelectors } from "../model";
import classes from "./ColorSelection.module.css";

const geometry = { width: 600, height: 580, anchorSize: 110 };

const ColorSelection = ({ className, onSelection, onConfirm }) => {
  const players = useStore(playerSelectors.selectPlayers);

  const clickHandler = (playerIndex) => {
    onSelection(playerIndex);
    onConfirm();
  };

  return (
    <>
      <div className={classes.backdrop} onClick={onConfirm}></div>
      <div className={className}>
        <HexedCanvas className={classes.canvas} geometry={geometry}>
          <HexedCanvas.ColorWheel
            className={classes.colorWheelHex}
            colors={players}
            sizeCoef={0.7}
            onClick={clickHandler}
          />
        </HexedCanvas>
      </div>
    </>
  );
};

export { ColorSelection };
