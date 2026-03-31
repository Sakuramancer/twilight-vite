import { HexedCanvas } from "core/canvas";
import { ButtonCanvas } from "core/ui";
import classes from "./AgendaActions.module.css";

const AgendaActions = ({
  isActiveAgendasPanelShown,
  onShowActiveAgendasPanelClick,
  isAddAgendaDialogShown,
  onShowAddAgendaDialogClick,
}) => {
  return (
    <>
      <ButtonCanvas
        isActive={isAddAgendaDialogShown}
        onSetActive={onShowAddAgendaDialogClick}
        symbol={<HexedCanvas.Plus className={classes.plusIcon} />}
      />
      <ButtonCanvas
        isActive={isActiveAgendasPanelShown}
        onSetActive={onShowActiveAgendasPanelClick}
        symbol={<HexedCanvas.Eye className={classes.icon} />}
      />
    </>
  );
};

export { AgendaActions };
