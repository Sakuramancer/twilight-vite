import { useStore } from "core/store";
import { getExpansionLabel, agendaSelectors } from "entities/agenda/model";
import {
  cardGeometry,
  FrameHex,
  AgendaView,
  TitleHex,
} from "entities/agenda/ui";
import classes from "./LibraryCardItem.module.css";

const LibraryCardItem = ({ agendaId }) => {
  const { static: agendaStatic } = useStore(
    agendaSelectors.makeAgenda(agendaId),
  );

  const { type, title, description, expansion } = agendaStatic;
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
