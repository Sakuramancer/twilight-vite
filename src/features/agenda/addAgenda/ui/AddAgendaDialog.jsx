import { PLAYER_COUNT } from "core/player";
import { Overlay } from "core/ui";
import { AddAgendaContent } from "./AddAgendaContent";
import classes from "./AddAgendaDialog.module.css";

const AddAgendaDialog = ({ onDiscard }) => {
  return (
    <Overlay
      className={classes.container}
      containerId="addAgenda"
      onDiscard={onDiscard}
      onConfirm={onDiscard}
      withScroll={false}
    >
      <AddAgendaContent />
    </Overlay>
  );
};

export { AddAgendaDialog };
