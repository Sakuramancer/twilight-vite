import HexedCanvas from "core/canvas/HexedCanvas";
import ButtonCanvas from "core/ui/PointColumnsLayout/ButtonCanvas";
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
