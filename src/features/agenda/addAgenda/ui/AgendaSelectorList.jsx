import { AgendaSelectorItem } from "./AgendaSelectorItem";

const AgendaSelectorList = ({
  className,
  agendaIds,
  excludedAgendas,
  toggleAvailableForRandom,
  setAgendaSelected,
}) => {
  return (
    <div className={className}>
      {agendaIds.map((agendaId) => (
        <AgendaSelectorItem
          key={agendaId}
          agendaId={agendaId}
          availableForRandom={!excludedAgendas.has(agendaId)}
          toggleAvailableForRandom={toggleAvailableForRandom}
          setAgendaSelected={setAgendaSelected}
        />
      ))}
    </div>
  );
};

export default AgendaSelectorList;
