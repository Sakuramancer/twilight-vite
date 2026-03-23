import { useStore } from "core/store";
import { relicSelectors } from "entities/relic/model";
import ActiveCardItem from "./ActiveCardItem";
import classes from "./PlayerRelics.module.css";

const PlayerRelics = ({ playerIndex }) => {
  const relicIds = useStore(relicSelectors.makeIdsForPlayer(playerIndex));

  return (
    <div className={classes.column}>
      {relicIds.map((relicId) => (
        <ActiveCardItem key={relicId} relicId={relicId} />
      ))}
    </div>
  );
};

export default PlayerRelics;
