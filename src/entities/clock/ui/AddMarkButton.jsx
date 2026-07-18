import { buttonGeometry, HexedCanvas } from "shared/ui";
import { getClockCommands } from "../ports";
import classes from "./AddMarkButton.module.css";

const AddMarkButton = () => {
  const commands = getClockCommands();

  const addMarkHandler = () => {
    commands.addClock("Label");
  };

  return (
    <HexedCanvas className={classes.canvas} geometry={buttonGeometry}>
      <HexedCanvas.Hex
        className={classes.hex}
        onClick={addMarkHandler}
        sitOnEdge={true}
      />
      <HexedCanvas.Plus className={classes.plusIcon} />
    </HexedCanvas>
  );
};

export { AddMarkButton };
