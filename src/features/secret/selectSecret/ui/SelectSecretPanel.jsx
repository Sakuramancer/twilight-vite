import { Overlay } from "core/ui";
import { SelectSecretContent } from "./SelectSecretContent";
import classes from "./SelectSecretPanel.module.css";

const SelectSecretPanel = ({ onDiscard, onConfirm }) => {
  return (
    <Overlay
      className={classes.container}
      containerId="selectSecrets"
      onDiscard={onDiscard}
      onConfirm={onConfirm}
      withScroll={true}
    >
      <SelectSecretContent />
    </Overlay>
  );
};

export { SelectSecretPanel };
