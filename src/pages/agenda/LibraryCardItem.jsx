import { useStore } from "shared/store";
import {
  getExpansionLabel,
  agendaSelectors,
  cardGeometry,
  FrameHex,
  AgendaView,
  TitleHex,
} from "entities/agenda";
import classes from "./LibraryCardItem.module.css";

const LibraryCardItem = ({ agendaId }) => {
  const { meta } = useStore(agendaSelectors.makeAgenda(agendaId));

  const { type, title, description, expansion } = meta;
  const label = getExpansionLabel(expansion);

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
            centered: true,
            muted: false,
            redpainted: false,
          },
        }}
        FrameSlot={{
          ...FrameHex,
          props: {
            type,
            description: description.value,
            label,
            muted: false,
          },
        }}
      />
    </div>
  );
};

export default LibraryCardItem;
