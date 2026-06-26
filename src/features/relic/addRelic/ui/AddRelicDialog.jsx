import { PLAYER_COUNT } from "shared/config";
import { Overlay } from "shared/ui";
import { AddRelicContent } from "./AddRelicContent";
import classes from "./AddRelicDialog.module.css";

const AddRelicDialog = ({ onDiscard }) => {
  return (
    <Overlay
      className={classes.container}
      containerId="addRelic"
      onDiscard={onDiscard}
      onConfirm={onDiscard}
      withScroll={false}
    >
      <AddRelicContent />
    </Overlay>
  );
};

export { AddRelicDialog };
