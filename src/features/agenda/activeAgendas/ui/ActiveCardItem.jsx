import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { useStore } from "shared/store";
import {
  agendaSelectors,
  buildAgendaSlots,
  getAgendaCommands,
  getExpansionLabel,
  cardGeometry,
  FrameHex,
  AgendaView,
  TitleHex,
  useAgendaInteractions,
} from "entities/agenda";
import { playerSelectors } from "entities/player";
import classes from "./ActiveCardItem.module.css";

const cx = classNames.bind(classes);

const ActiveCardItem = ({ agendaId }) => {
  const agenda = useStore(agendaSelectors.makeAgenda(agendaId));
  const players = useStore(playerSelectors.selectPlayers);

  const { state, meta } = agenda;
  const { type, description, expansion } = meta;
  const { purged } = state;
  const label = getExpansionLabel(expansion);

  const commands = getAgendaCommands();

  const { ui, actions } = useAgendaInteractions(agendaId, commands);

  const slots = buildAgendaSlots({
    agenda,
    players,
    ui,
    actions,
  });

  const { voting } = agenda.state;
  const { playerVoted } = agenda.derived;
  const colorId = playerVoted ? players[voting].colorId : "_default";

  const mainClass = cx({
    main: true,
    [colorClasses[colorId]]: playerVoted,
  });

  return (
    <div className={mainClass}>
      <AgendaView
        geometry={cardGeometry}
        {...slots}
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
