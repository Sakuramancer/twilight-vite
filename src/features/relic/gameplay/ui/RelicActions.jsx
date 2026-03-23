import { HexedCanvas } from "core/canvas";
import { ButtonCanvas } from "core/ui";
import classes from "./RelicActions.module.css";

const RelicActions = ({
  isActiveRelicsPanelShown,
  onShowActiveRelicsPanelClick,
  isAddRelicDialogShown,
  onShowAddRelicDialogClick,
}) => {
  return (
    <>
      <ButtonCanvas
        isActive={isAddRelicDialogShown}
        onSetActive={onShowAddRelicDialogClick}
        symbol={<HexedCanvas.Plus className={classes.plusIcon} />}
      />
      <ButtonCanvas
        isActive={isActiveRelicsPanelShown}
        onSetActive={onShowActiveRelicsPanelClick}
        symbol={<HexedCanvas.Eye className={classes.icon} />}
      />
    </>
  );
};

export { RelicActions };
