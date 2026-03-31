import { useCallback, useState } from "react";
import { useSearch } from "core/hooks";
import { PLAYER_COUNT } from "core/player";
import { useStore } from "core/store";
import { useOverlayContext } from "core/ui";
import { relicSelectors, relicsSearchIndex } from "entities/relic/model";
import { getRelicCommands } from "entities/relic/ports";
import RelicSelectColumn from "./RelicSelectColumn";
import RelicSelectorList from "./RelicSelectorList";
import classes from "./AddRelicContent.module.css";

const AddRelicContent = () => {
  const relicIds = useStore(relicSelectors.selectIdsInactive);
  const { onDiscard } = useOverlayContext();
  const [searchValue, setSearchValue, resultIds] = useSearch(
    relicsSearchIndex,
    relicIds,
  );

  const [relicSelected, setRelicSelected] = useState();
  const [playerSelected, setPlayerSelected] = useState(-1);
  const [excludedRelics, setExcludedRelics] = useState(() => new Set());

  const randomPool = relicIds.filter((relicId) => !excludedRelics.has(relicId));
  const randomSize = randomPool.length;

  const readyToAdd = relicSelected && playerSelected > -1;
  const commands = getRelicCommands();

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

  const confirmHandler = useCallback(() => {
    if (!readyToAdd) return;
    commands.assignRelicToPlayer(relicSelected, playerSelected);
    onDiscard();
  }, [readyToAdd, commands, relicSelected, playerSelected, onDiscard]);

  const keyDownHandler = (event) => {
    if (event.key === "Enter") confirmHandler();
  };

  return (
    <div className={classes.main} onKeyDown={keyDownHandler} tabIndex={-1}>
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
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <RelicSelectorList
          className={classes.manager}
          relicIds={resultIds}
          excludedRelics={excludedRelics}
          toggleAvailableForRandom={toggleAvailableForRandom}
          setRelicSelected={setRelicSelected}
        />
      </div>
    </div>
  );
};

export { AddRelicContent };
