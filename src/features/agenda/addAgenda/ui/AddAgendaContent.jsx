import { useCallback, useState } from "react";
import { useSearch } from "core/hooks";
import { PLAYER_COUNT } from "core/player";
import { useStore } from "core/store";
import { useOverlayContext } from "core/ui";
import { agendaSelectors, agendasSearchIndex } from "entities/agenda/model";
import { getAgendaCommands } from "entities/agenda/ports";
import AgendaSelectColumn from "./AgendaSelectColumn";
import AgendaSelectorList from "./AgendaSelectorList";
import classes from "./AddAgendaContent.module.css";

const AddAgendaContent = () => {
  const agendaIds = useStore(agendaSelectors.selectIdsInactive);
  const { onDiscard } = useOverlayContext();
  const [searchValue, setSearchValue, resultIds] = useSearch(
    agendasSearchIndex,
    agendaIds,
  );

  const [agendaSelected, setAgendaSelected] = useState();
  const [excludedAgendas, setExcludedAgendas] = useState(() => new Set());

  const randomPool = agendaIds.filter(
    (agendaId) => !excludedAgendas.has(agendaId),
  );
  const randomSize = randomPool.length;

  const readyToAdd = agendaSelected;
  const commands = getAgendaCommands();

  const toggleAvailableForRandom = (agendaId) => {
    setExcludedAgendas((prev) => {
      const next = new Set(prev);
      next.has(agendaId) ? next.delete(agendaId) : next.add(agendaId);
      return next;
    });
  };

  const randomHandler = () => {
    const roll = Math.floor(Math.random() * randomSize);
    setAgendaSelected(randomPool[roll]);
  };

  const confirmHandler = useCallback(() => {
    if (!readyToAdd) return;
    commands.activateAgenda(agendaSelected);
    onDiscard();
  }, [readyToAdd, commands, agendaSelected, onDiscard]);

  const keyDownHandler = (event) => {
    if (event.key === "Enter") confirmHandler();
  };

  return (
    <div className={classes.main} onKeyDown={keyDownHandler} tabIndex={-1}>
      <div className={classes.header}>Добавление политики</div>
      <div className={classes.content}>
        <AgendaSelectColumn
          className={classes.column}
          agendaSelected={agendaSelected}
          readyToAdd={readyToAdd}
          randomSize={randomSize}
          onRandom={randomHandler}
          onConfirm={confirmHandler}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <AgendaSelectorList
          className={classes.manager}
          agendaIds={resultIds}
          excludedAgendas={excludedAgendas}
          toggleAvailableForRandom={toggleAvailableForRandom}
          setAgendaSelected={setAgendaSelected}
        />
      </div>
    </div>
  );
};

export { AddAgendaContent };
