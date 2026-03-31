import { useStore } from "core/store";
import { agendaSelectors } from "entities/agenda/model";
import GameplayCompactItem from "./GameplayCompactItem";
import classes from "./AgendaContent.module.css";

const AgendaContent = () => {
  const agendaIds = useStore(agendaSelectors.selectIdsForGameplay);

  return (
    <div className={classes.container}>
      {agendaIds.map((agendaId) => (
        <GameplayCompactItem key={agendaId} agendaId={agendaId} />
      ))}
    </div>
  );
};

export { AgendaContent };
