import Overlay from "core/ui/Overlay";
import { GoalCard } from "entities/goal/ui/";
import { secretSelectors } from "entities/secret/model";
import classes from "./SelectSecretPanel.module.css";

const SelectSecretPanel = ({ onDiscard, onConfirm }) => {
  const sortedIds = secretSelectors.sortedIds;

  return (
    <Overlay
      className={classes.container}
      containerId="selectSecrets"
      onDiscard={onDiscard}
      onConfirm={onConfirm}
      withScroll={true}
    >
      <div className={classes.main}>
        {sortedIds.map((cardId) => (
          <GoalCard key={cardId} cardId={cardId} onConfirm={onConfirm} />
        ))}
      </div>
    </Overlay>
  );
};

export { SelectSecretPanel };
