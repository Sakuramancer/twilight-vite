import { useStore } from "core/store/StoreContext";
import { relicSelectors } from "entities/relic/model";
import GameplayCardItem from "../../gameplay/GameplayCardItem";
import classes from "./PlayerRelics.module.css";

const PlayerRelics = ({ playerIndex }) => {
  const relicIds = useStore(relicSelectors.makeIdsForPlayer(playerIndex));

  return (
    <div className={classes.column}>
      {relicIds.map((relicId) => (
        <GameplayCardItem key={relicId} relicId={relicId} />
      ))}
    </div>
  );
};

export default PlayerRelics;
