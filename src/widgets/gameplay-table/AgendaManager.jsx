import { useState } from "react";
import { PointColumn } from "core/ui";
import { AgendaActions, AgendaContent } from "features/agenda/gameplay";
import { ActiveAgendasPanel } from "features/agenda/activeAgendas";
import { AddAgendaDialog } from "features/agenda/addAgenda";

const AgendaManager = () => {
  const [showActiveAgendasPanel, setShowActiveAgendasPanel] = useState(false);
  const [showAddAgendaDialog, setShowAddAgendaDialog] = useState(false);

  return (
    <>
      <PointColumn
        title="Политика"
        content={<AgendaContent />}
        actions={
          <AgendaActions
            isActiveAgendasPanelShown={showActiveAgendasPanel}
            onShowActiveAgendasPanelClick={() =>
              setShowActiveAgendasPanel(true)
            }
            isAddAgendaDialogShown={showAddAgendaDialog}
            onShowAddAgendaDialogClick={() => setShowAddAgendaDialog(true)}
          />
        }
      />
      {showActiveAgendasPanel && (
        <ActiveAgendasPanel
          onDiscard={() => setShowActiveAgendasPanel(false)}
        />
      )}
      {showAddAgendaDialog && (
        <AddAgendaDialog onDiscard={() => setShowAddAgendaDialog(false)} />
      )}
    </>
  );
};

export { AgendaManager };
