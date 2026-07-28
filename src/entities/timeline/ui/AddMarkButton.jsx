import { useStore } from "shared/store";
import { buttonGeometry, HexedCanvas } from "shared/ui";
import { timelineSelectors, newRoundLabel } from "../model";
import { getTimelineCommands } from "../ports";
import classes from "./AddMarkButton.module.css";

const AddMarkButton = ({ setFocusTrigger }) => {
  const commands = getTimelineCommands();
  const newRound = useStore(timelineSelectors.selectNewRound);

  const addMarkHandler = () => {
    commands.addMark(newRoundLabel(newRound));
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
