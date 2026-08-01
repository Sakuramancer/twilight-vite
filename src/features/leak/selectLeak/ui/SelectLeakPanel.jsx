import { Overlay } from "shared/ui";
import { selectLeak } from "../model/commands";
import { SelectLeakContent } from "./SelectLeakContent";
import classes from "./SelectLeakPanel.module.css";

const SelectLeakPanel = ({ onDiscard }) => {
  const onConfirm = ({ playerIndex, secretIndex, cardId }) => {
    selectLeak(playerIndex, secretIndex, cardId);
    onDiscard();
  };

  return (
    <Overlay
      className={classes.container}
      containerId="leaks"
      onDiscard={onDiscard}
      onConfirm={onConfirm}
      withScroll={true}
    >
      <SelectLeakContent />
    </Overlay>
  );
};

export { SelectLeakPanel };
