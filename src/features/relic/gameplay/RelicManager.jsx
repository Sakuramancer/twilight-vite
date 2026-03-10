import { useState } from "react";
import { PointColumn } from "core/ui";
import { RelicActions } from "./RelicActions";
import { RelicContent } from "./RelicContent";
import { ActiveRelicsPanel } from "../activeRelics/ui";
import { AddRelicDialog } from "../addRelic/ui";

const RelicManager = () => {
  const [showActiveRelicsPanel, setShowActiveRelicsPanel] = useState(false);
  const [showAddRelicDialog, setShowAddRelicDialog] = useState(false);

  return (
    <>
      <PointColumn
        title="Реликвии"
        content={<RelicContent />}
        actions={
          <RelicActions
            isActiveRelicsPanelShown={showActiveRelicsPanel}
            onShowActiveRelicsPanelClick={() => setShowActiveRelicsPanel(true)}
            isAddRelicDialogShown={showAddRelicDialog}
            onShowAddRelicDialogClick={() => setShowAddRelicDialog(true)}
          />
        }
      />
      {showActiveRelicsPanel && (
        <ActiveRelicsPanel onDiscard={() => setShowActiveRelicsPanel(false)} />
      )}
      {showAddRelicDialog && (
        <AddRelicDialog onDiscard={() => setShowAddRelicDialog(false)} />
      )}
    </>
  );
};

export { RelicManager };
