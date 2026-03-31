import classNames from "classnames/bind";
import { useTimer } from "core/hooks";
import { useStore } from "core/store";
import { agendaSelectors } from "entities/agenda/model";
import { getAgendaCommands } from "entities/agenda/ports";
import { compactGeometry, AgendaView, TitleHex } from "entities/agenda/ui";
import classes from "./GameplayCompactItem.module.css";

const cx = classNames.bind(classes);

const GameplayCompactItem = ({ agendaId }) => {
  const { state: agendaState, static: agendaStatic } = useStore(
    agendaSelectors.makeAgenda(agendaId),
  );

  const { title, type } = agendaStatic;
  const { purged } = agendaState;

  const commands = getAgendaCommands();

  const {
    isActive: redpainted,
    startTimer: showRedpainted,
    stopTimer: hideRedpainted,
  } = useTimer(1000);

  const titleClickHandler = () => {
    if (!redpainted) {
      showRedpainted();
      return;
    }
    hideRedpainted();
    commands.resetAgenda(agendaId);
  };

  const mainClass = cx({
    main: true,
  });

  return (
    <div className={mainClass}>
      <AgendaView
        geometry={compactGeometry}
        TitleSlot={{
          ...TitleHex,
          props: {
            title: title.value,
            titleVisible: true,
            type,
            centered: false,
            muted: purged,
            redpainted,
            onClick: titleClickHandler,
          },
        }}
      />
    </div>
  );
};

export default GameplayCompactItem;
