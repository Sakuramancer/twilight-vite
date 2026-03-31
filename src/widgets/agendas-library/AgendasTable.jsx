import LibraryCardItem from "./LibraryCardItem";
import classes from "./AgendasTable.module.css";

const AgendasTable = ({ agendaIds }) => {
  return (
    <div className={classes.main}>
      {agendaIds.map((agendaId) => (
        <LibraryCardItem key={agendaId} agendaId={agendaId} />
      ))}
    </div>
  );
};

export default AgendasTable;
