import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { useStore } from "shared/store";
import {
  agendaSelectors,
  AgendaView,
  buildAgendaSlots,
  compactGeometry,
  getAgendaCommands,
  useAgendaInteractions
} from "entities/agenda";
import { playerSelectors } from "entities/player";
import classes from "./GameplayCompactItem.module.css";

const cx = classNames.bind(classes);

const GameplayCompactItem = ({ agendaId }) => {
  const agenda = useStore(agendaSelectors.makeAgenda(agendaId));
  const players = useStore(playerSelectors.selectPlayers);

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
      <AgendaView geometry={compactGeometry} {...slots} />
    </div>
  );
};

export default GameplayCompactItem;
