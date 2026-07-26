import { useStore } from "shared/store";
import { buttonGeometry, HexedCanvas } from "shared/ui";
import { clockSelectors, newRoundLabel } from "../model";
import { getClockCommands } from "../ports";
import classes from "./AddMarkButton.module.css";

const AddMarkButton = ({ setFocusTrigger }) => {
  const commands = getClockCommands();
  const newRound = useStore(clockSelectors.selectNewRound);

  const addMarkHandler = () => {
    commands.addClock(newRoundLabel(newRound));
    setFocusTrigger(true);
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
