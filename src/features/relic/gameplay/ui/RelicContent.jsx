import { useStore } from "shared/store";
import { relicSelectors } from "entities/relic";
import GameplayCompactItem from "./GameplayCompactItem";
import classes from "./RelicContent.module.css";

const RelicContent = () => {
  const relicIds = useStore(relicSelectors.selectIdsForGameplay);

  return (
    <div className={classes.container}>
      {relicIds.map((relicId) => (
        <GameplayCompactItem key={relicId} relicId={relicId} />
      ))}
    </div>
  );
};

export { RelicContent };
