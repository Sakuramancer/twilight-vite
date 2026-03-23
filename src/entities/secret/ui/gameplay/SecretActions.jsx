import { HexedCanvas } from "core/canvas";
import { ButtonCanvas } from "core/ui";
import classes from "./SecretActions.module.css";

const SecretActions = ({
  isActiveSecretsPanelShown,
  onShowActiveSecretsPanelClick,
}) => {
  return (
    <ButtonCanvas
      isActive={isActiveSecretsPanelShown}
      onSetActive={onShowActiveSecretsPanelClick}
      symbol={<HexedCanvas.Eye className={classes.icon} />}
    />
  );
};

export { SecretActions };
