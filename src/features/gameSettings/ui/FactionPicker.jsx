import { useState } from "react";
import { PLAYER_COUNT } from "core/config";
import HexLayout from "core/ui/HexLayout";
import HexedCanvas from "core/canvas/HexedCanvas";
import { getColorCommands } from "entities/color/ports";
import FactionPickerItem from "./FactionPickerItem";
import classes from "./FactionPicker.module.css";

const geometry = { width: 100, height: 60, anchorSize: 10 };

const FactionPicker = ({ playerActivated, setPlayerActivated }) => {
  const commands = getColorCommands();
  const [colorActivated, setColorActivated] = useState(-1);

  const playerSelectionHandler = (playerIndex) => {
    setPlayerActivated(
      (value) => (value === playerIndex ? -1 : playerIndex),
      [],
    );
  };

  const colorSelectionHandler = (playerIndex) => {
    setColorActivated(
      (value) => (value === playerIndex ? -1 : playerIndex),
      [],
    );
  };

  const colorPickHandler = (event) => {
    commands.setColor(colorActivated, event.target.id);
    setColorActivated(-1);
    event.preventDefault();
  };

  return (
    <div className={classes.main}>
      <HexLayout className={classes.grid}>
        {Array.from({ length: PLAYER_COUNT }, (_, playerIndex) => (
          <FactionPickerItem
            key={playerIndex}
            playerIndex={playerIndex}
            isPlayerActivated={playerIndex === playerActivated}
            isColorActivated={playerIndex === colorActivated}
            onPlayerSelected={playerSelectionHandler}
            onColorSelected={colorSelectionHandler}
          />
        ))}
      </HexLayout>
      {colorActivated !== -1 && (
        <HexedCanvas className={classes.coloredCanvas} geometry={geometry}>
          <HexedCanvas.ColorHexes
            className={classes.colorHexes}
            onClick={colorPickHandler}
          />
        </HexedCanvas>
      )}
    </div>
  );
};

export default FactionPicker;
