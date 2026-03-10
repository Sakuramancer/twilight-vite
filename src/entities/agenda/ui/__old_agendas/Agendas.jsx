import { useStore } from "core/store/StoreContext";
import AgendaFlower from "./AgendaFlower";
// import AgendasSelection from "../AgendasSelection";
import AgendasFullView from "./AgendasFullView";
import PointsTable from "../pointsTable/PointsTable";
import classes from "./Agendas.module.css";

const Agendas = ({ className }) => {
  const agendas = useStore((s) => s.agendas);

  return (
    <div className={className}>
      <PointsTable.Header>Политики</PointsTable.Header>
      <div className={classes.scrollable}>
        <PointsTable.Block>
          {Object.entries(agendas).map(([id, _]) => (
            <AgendaFlower key={id} agendaId={id} />
          ))}
        </PointsTable.Block>
      </div>
      {/* {indexes.secretIndex >= 0 && (
        <RelicSelection
          onDiscard={() => setIndexes(defaultIndexes)}
          onConfirm={relicSelectedHandler}
        />
      )} */}
      <AgendasFullView className={classes.buttons} />
    </div>
  );
};

export default Agendas;
