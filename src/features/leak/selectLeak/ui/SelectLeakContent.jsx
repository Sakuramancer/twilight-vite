import { useStore } from "shared/store";
import { Overlay, useOverlayContext } from "shared/ui";
import { GoalCard } from "entities/goal";
import { selectors } from "../model/selectors";
import classes from "./SelectLeakContent.module.css";

const SelectLeakContent = () => {
  const secrets = useStore(selectors.selectSecrets);
  const { onConfirm } = useOverlayContext();

  const confirmHandler = (playerIndex, secretIndex) => (cardId) =>
    onConfirm({ playerIndex, secretIndex, cardId });

  return (
    <div className={classes.main}>
      <div className={classes.header}>Выбор секрета</div>
      <div className={classes.table}>
        {secrets.map(({ colorId, playerSecrets, playerIndex }) => (
          <div key={playerIndex} className={classes.column}>
            {playerSecrets.map(({ cardId, secretIndex }) => (
              <GoalCard
                key={secretIndex}
                variant="secret"
                cardId={cardId}
                colorId={colorId}
                onConfirm={confirmHandler(playerIndex, secretIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export { SelectLeakContent };
