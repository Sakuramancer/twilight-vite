import { agendaSelectors } from "entities/agenda/model";
import LibraryCardItem from "./LibraryCardItem";
import classes from "./AgendasTable.module.css";

const AgendasTable = ({ filters }) => {
  const agendaIds = agendaSelectors.allSortedIdsWithFilters(filters);

  return (
    <div className={classes.main}>
      {agendaIds.map((agendaId) => (
        <LibraryCardItem key={agendaId} agendaId={agendaId} />
      ))}
    </div>
  );
};

export default AgendasTable;
