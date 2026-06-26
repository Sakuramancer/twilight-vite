import { useStore } from "shared/store";
import { HexedCanvas } from "shared/ui";
import {
  getExpansionLabel,
  agendaSelectors,
  AgendaView,
  FrameHex,
  TitleHex,
  cardGeometry,
} from "entities/agenda";
import { DiceHex } from "./DiceHex";
import classes from "./AgendaSelectorItem.module.css";

const AgendaSelectorItem = ({
  agendaId,
  availableForRandom,
  toggleAvailableForRandom,
  setAgendaSelected,
}) => {
  const { meta } = useStore(agendaSelectors.makeAgenda(agendaId));

  const { title, type, description, expansion } = meta;
  const label = getExpansionLabel(expansion);

  const onDiceClick = () => toggleAvailableForRandom(agendaId);
  const muted = !availableForRandom;
  const onCardClick = () => setAgendaSelected(agendaId);

  return (
    <div className={classes.main}>
      <AgendaView
        geometry={cardGeometry}
        TitleSlot={{
          ...TitleHex,
          props: {
            title: title.value,
            titleVisible: true,
            type,
            centered: false,
            muted,
            redpainted: false,
            onClick: onCardClick,
          },
        }}
        PlayerSlot={{
          ...DiceHex,
          props: {
            type,
            muted,
            onClick: onDiceClick,
          },
        }}
        FrameSlot={{
          ...FrameHex,
          props: {
            description: description.value,
            type,
            label,
            muted,
            onClick: onCardClick,
          },
        }}
      />
    </div>
  );
};

export { AgendaSelectorItem };
