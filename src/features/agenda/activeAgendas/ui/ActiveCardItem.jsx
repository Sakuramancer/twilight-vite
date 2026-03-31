import classNames from "classnames/bind";
import { useTimer } from "core/hooks";
import { useStore } from "core/store";
import { getExpansionLabel, agendaSelectors } from "entities/agenda/model";
import { getAgendaCommands } from "entities/agenda/ports";
import {
  cardGeometry,
  FrameHex,
  AgendaView,
  TitleHex,
} from "entities/agenda/ui";
import classes from "./ActiveCardItem.module.css";

const cx = classNames.bind(classes);

const ActiveCardItem = ({ agendaId }) => {
  const {
    state: agendaState,
    static: agendaStatic,
  } = useStore(agendaSelectors.makeAgenda(agendaId));

  const { title, type, description, expansion } = agendaStatic;
  const { purged } = agendaState;
  const label = getExpansionLabel(expansion);

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
        geometry={cardGeometry}
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
        FrameSlot={{
          ...FrameHex,
          props: {
            description: description.value,
            type,
            label,
            muted: purged,
          },
        }}
      />
    </div>
  );
};

export default ActiveCardItem;
