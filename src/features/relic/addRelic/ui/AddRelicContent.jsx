import { useState } from "react";
import { PLAYER_COUNT } from "core/player";
import { useOverlayContext } from "core/ui";
import { useStore } from "core/store";
import { relicSelectors } from "entities/relic/model";
import { getRelicCommands } from "entities/relic/ports";
import RelicSelectColumn from "./RelicSelectColumn";
import RelicSelectorList from "./RelicSelectorList";
import classes from "./AddRelicContent.module.css";

const AddRelicContent = () => {
  const relicIds = useStore(relicSelectors.selectIdsInactive);
  const { onDiscard } = useOverlayContext();

  const [relicSelected, setRelicSelected] = useState();
  const [playerSelected, setPlayerSelected] = useState(-1);
  const [excludedRelics, setExcludedRelics] = useState(() => new Set());

  const randomPool = relicIds.filter((relicId) => !excludedRelics.has(relicId));
  const randomSize = randomPool.length;

  const readyToAdd = relicSelected && playerSelected > -1;

  const toggleAvailableForRandom = (relicId) => {
    setExcludedRelics((prev) => {
      const next = new Set(prev);
      next.has(relicId) ? next.delete(relicId) : next.add(relicId);
      return next;
    });
  };

  const randomHandler = () => {
    const roll = Math.floor(Math.random() * randomSize);
    setRelicSelected(randomPool[roll]);
  };

  const commands = getRelicCommands();
  const confirmHandler = readyToAdd
    ? () => {
        commands.assignRelicToPlayer(relicSelected, playerSelected);
        onDiscard();
      }
    : () => {};

  return (
    <div className={classes.main}>
      <div className={classes.header}>Добавление реликвии</div>
      <div className={classes.content}>
        <RelicSelectColumn
          className={classes.column}
          relicSelected={relicSelected}
          playerSelected={playerSelected}
          setPlayerSelected={setPlayerSelected}
          readyToAdd={readyToAdd}
          randomSize={randomSize}
          onRandom={randomHandler}
          onConfirm={confirmHandler}
        />
        <RelicSelectorList
          className={classes.manager}
          excludedRelics={excludedRelics}
          toggleAvailableForRandom={toggleAvailableForRandom}
          setRelicSelected={setRelicSelected}
        />
      </div>
    </div>
  );
};

export { AddRelicContent };
