import HexedCanvas from "core/canvas/HexedCanvas";
import { useStore } from "core/store/StoreContext";
import classes from "./ColorSelection.module.css";

const geometry = { width: 600, height: 580, anchorSize: 110 };

const ColorSelection = ({ className, onSelection, onConfirm }) => {
  const colors = useStore((s) => s.colors);

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
            colors={colors}
            sizeCoef={0.7}
            onClick={clickHandler}
          />
        </HexedCanvas>
      </div>
    </>
  );
};

export default ColorSelection;
