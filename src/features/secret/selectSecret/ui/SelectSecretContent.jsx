import { useOverlayContext } from "core/ui";
import { GoalCard } from "entities/goal/ui";
import { secretSelectors } from "entities/secret/model";
import classes from "./SelectSecretContent.module.css";

const SelectSecretContent = () => {
  const { onConfirm } = useOverlayContext();
  const sortedIds = secretSelectors.sortedIds;

  return (
    <div className={classes.main}>
      {sortedIds.map((cardId) => (
        <GoalCard key={cardId} cardId={cardId} onConfirm={onConfirm} />
      ))}
    </div>
  );
};

export { SelectSecretContent };
