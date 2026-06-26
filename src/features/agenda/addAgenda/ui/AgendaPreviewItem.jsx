import { useState } from "react";
import classNames from "classnames/bind";
import { useTimer } from "shared/lib";
import { useStore } from "shared/store";
import { HexedCanvas } from "shared/ui";
import {
  getExpansionLabel,
  agendaSelectors,
  FrameHex,
  AgendaView,
  TitleHex,
  cardGeometry,
} from "entities/agenda";
import classes from "./AgendaPreviewItem.module.css";

const cx = classNames.bind(classes);

const emptyPreviewMeta = {
  title: { value: "" },
  type: "law",
  description: { value: ["ВЫБЕРИТЕ ПОЛИТИКУ"] },
  expansion: "",
};

const AgendaPreviewItem = ({ agendaId }) => {
  const [stableAgendaId, setStableAgendaId] = useState(-1);
  const { isActive: exitState, startTimer } = useTimer(200);
  const { meta } = useStore(agendaSelectors.makeAgenda(stableAgendaId));

  if (stableAgendaId !== agendaId) {
    if (stableAgendaId === -1) {
      setStableAgendaId(agendaId);
    } else if (!exitState) {
      startTimer(() => setStableAgendaId(agendaId));
    }
  }

  const { title, type, description, expansion } = meta ?? emptyPreviewMeta;
  const label = getExpansionLabel(expansion);

  const mainClass = cx({
    main: true,
    enter: !exitState,
    exit: exitState,
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
            muted: false,
            redpainted: false,
          },
        }}
        FrameSlot={{
          ...FrameHex,
          props: {
            description: description.value,
            type,
            label,
            muted: false,
          },
        }}
      />
    </div>
  );
};

export { AgendaPreviewItem };
