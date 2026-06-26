import { useState } from "react";
import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { useTimer } from "shared/lib";
import { useStore } from "shared/store";
import { HexedCanvas } from "shared/ui";
import {
  getExpansionLabel,
  relicSelectors,
  FrameHex,
  PlayerHex,
  PointHex,
  RelicView,
  TitleHex,
  cardGeometry,
} from "entities/relic";
import classes from "./RelicPreviewItem.module.css";

const cx = classNames.bind(classes);

const emptyPreviewMeta = {
  title: { value: "" },
  havePoint: false,
  description: { value: ["ВЫБЕРИТЕ РЕЛИКВИЮ"] },
  expansion: "",
};

const RelicPreviewItem = ({ relicId, playerIndex, colorId }) => {
  const [stableRelicId, setStableRelicId] = useState(-1);
  const { isActive: exitState, startTimer } = useTimer(200);
  const { meta } = useStore(relicSelectors.makeRelic(stableRelicId));

  if (stableRelicId !== relicId) {
    if (stableRelicId === -1) {
      setStableRelicId(relicId);
    } else if (!exitState) {
      startTimer(() => setStableRelicId(relicId));
    }
  }

  const { title, havePoint, description, expansion } = meta ?? emptyPreviewMeta;
  const label = getExpansionLabel(expansion);

  const mainClass = cx({
    main: true,
    enter: !exitState,
    exit: exitState,
    [colorClasses[colorId]]: true,
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
        PlayerSlot={
          playerIndex > -1
            ? {
                ...PlayerHex,
                props: {
                  colorId,
                  striped: false,
                  contentVisible: false,
                },
              }
            : {}
        }
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
