import { useState } from "react";
import { PointColumn } from "core/ui";
import { getSecretCommands } from "entities/secret/ports/";
import { SecretActions, SecretContent } from "entities/secret/ui";
import { ActiveSecretsPanel } from "features/secret/activeSecrets";
import { SelectSecretPanel } from "features/secret/selectSecret";

const defaultIndexes = { playerIndex: -1, secretIndex: -1 };

const SecretManager = () => {
  const commands = getSecretCommands();
  const [indexes, setIndexes] = useState(defaultIndexes);
  const [showActiveSecretsPanel, setActiveSecretsPanel] = useState(false);

  const secretSelectedHandler = (cardId) => {
    const { playerIndex, secretIndex } = indexes;
    commands.setSecretForPlayer(playerIndex, secretIndex, cardId);
    setIndexes(defaultIndexes);
  };

  return (
    <>
      <PointColumn
        title="Секреты"
        content={<SecretContent setIndexes={setIndexes} />}
        actions={
          <SecretActions
            isActiveSecretsPanelShown={showActiveSecretsPanel}
            onShowActiveSecretsPanelClick={() => setActiveSecretsPanel(true)}
          />
        }
      />
      {showActiveSecretsPanel && (
        <ActiveSecretsPanel onDiscard={() => setActiveSecretsPanel(false)} />
      )}
      {indexes.secretIndex >= 0 && (
        <SelectSecretPanel
          onDiscard={() => setIndexes(defaultIndexes)}
          onConfirm={secretSelectedHandler}
        />
      )}
    </>
  );
};

export { SecretManager };
