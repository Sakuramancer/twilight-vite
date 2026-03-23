import { useState } from "react";
import { PointColumn } from "core/ui";
import { RelicActions, RelicContent } from "features/relic/gameplay";
import { ActiveRelicsPanel } from "features/relic/activeRelics";
import { AddRelicDialog } from "features/relic/addRelic";

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
