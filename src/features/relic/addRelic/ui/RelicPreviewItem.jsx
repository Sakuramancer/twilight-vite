import { useState } from "react";
import classNames from "classnames/bind";
import { useTimer } from "core/hooks";
import { useStore } from "core/store";
import { HexedCanvas } from "core/canvas";
import { getExpansionLabel, relicSelectors } from "entities/relic/model";
import {
  FrameHex,
  PlayerHex,
  PointHex,
  RelicView,
  TitleHex,
  cardGeometry,
} from "entities/relic/ui";
import colors from "core/data/colors.module.css";
import classes from "./RelicPreviewItem.module.css";

const cx = classNames.bind(classes);

const defaultStatic = {
  title: { value: "" },
  havePoint: false,
  description: { value: ["ВЫБЕРИТЕ РЕЛИКВИЮ"] },
  expansion: "",
};

const RelicPreviewItem = ({ relicId, playerIndex, colorId }) => {
  const [stableRelicId, setStableRelicId] = useState(-1);
  const { isActive: exitState, startTimer } = useTimer(200);
  const { static: relicStatic } = useStore(
    relicSelectors.makeRelic(stableRelicId),
  );

  if (stableRelicId !== relicId) {
    if (stableRelicId === -1) {
      setStableRelicId(relicId);
    } else if (!exitState) {
      startTimer(() => setStableRelicId(relicId));
    }
  }

  const { title, havePoint, description, expansion } =
    relicStatic ?? defaultStatic;
  const label = getExpansionLabel(expansion);

  const mainClass = cx({
    main: true,
    enter: !exitState,
    exit: exitState,
    [colors[colorId]]: true,
  });

  return (
    <div className={mainClass}>
      <RelicView
        geometry={cardGeometry}
        TitleSlot={{
          ...TitleHex,
          props: {
            title: title.value,
            titleVisible: true,
            centered: false,
            muted: false,
            redpainted: false,
          },
        }}
        PlayerSlot={{
          ...PlayerHex,
          props: {
            colorId,
            striped: false,
            content: "?",
            contentVisible: playerIndex === -1,
          },
        }}
        PointSlot={
          havePoint
            ? {
                ...PointHex,
                props: {
                  colored: false,
                },
              }
            : {}
        }
        FrameSlot={{
          ...FrameHex,
          props: {
            description: description.value,
            label,
            muted: false,
          },
        }}
      />
    </div>
  );
};

export { RelicPreviewItem };
