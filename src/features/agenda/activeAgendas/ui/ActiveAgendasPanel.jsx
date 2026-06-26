import { useStore } from "shared/store";
import { Overlay } from "shared/ui";
import { agendaSelectors } from "entities/agenda";
import ActiveCardItem from "./ActiveCardItem";
import classes from "./ActiveAgendasPanel.module.css";

const ActiveAgendasPanel = ({ onDiscard }) => {
  const agendaIds = useStore(agendaSelectors.selectIdsForGameplay);

  return (
    <Overlay
      className={classes.container}
      containerId="agendas"
      onDiscard={onDiscard}
      onConfirm={onDiscard}
      withScroll={true}
    >
      <div className={classes.main}>
        <div className={classes.header}>Политики</div>
        <div className={classes.table}>
          {agendaIds.map((agendaId) => (
            <ActiveCardItem key={agendaId} agendaId={agendaId} />
          ))}
        </div>
      </div>
    </Overlay>
  );
};

export { ActiveAgendasPanel };
