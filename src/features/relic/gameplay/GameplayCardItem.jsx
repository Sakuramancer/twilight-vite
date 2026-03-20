import { useState } from "react";
import classNames from "classnames/bind";
import { useStore } from "core/store/StoreContext";
import { getExpansionLabel, relicSelectors } from "entities/relic/model";
import { getRelicCommands } from "entities/relic/ports";
import {
  cardGeometry,
  ColorsHex,
  FrameHex,
  PlayerHex,
  PointHex,
  RelicView,
  TitleHex,
} from "entities/relic/ui";
import colorsStatic from "core/data/colors.module.css";
import classes from "./GameplayCardItem.module.css";

const cx = classNames.bind(classes);

const GameplayCardItem = ({ relicId }) => {
  const {
    colorId,
    state: relicState,
    static: relicStatic,
  } = useStore(relicSelectors.makeRelic(relicId));
  const colors = useStore((s) => s.colors);

  const { title, havePoint, description, expansion } = relicStatic;
  const { purged, playerIndex, pointTaken } = relicState;
  const label = getExpansionLabel(expansion);

  const commands = getRelicCommands();
  const [clickCount, setClickCount] = useState(0);
  const [showColors, setShowColors] = useState(false);

  const striped = (!showColors && purged) || (showColors && !purged);
  const content = showColors && purged ? "⇑" : "?";
  const contentVisible = playerIndex === -1 || (showColors && purged);

  const titleClickHandler = showColors
    ? undefined
    : () => {
        if (clickCount === 0) {
          setClickCount(1);
          setTimeout(() => {
            setClickCount(0);
          }, 1000);
          return;
        }
        setClickCount(0);
        commands.resetRelic(relicId);
      };

  const pointClickHandler = () => {
    commands.toggleRelicPointTaken(relicId);
  };

  const colorsClickHandler = (playerIndex) => {
    commands.assignRelicToPlayer(relicId, playerIndex);
    setShowColors(false);
  };

  const playerClickHandler = () => {
    if (showColors) {
      commands.toggleRelicPurged(relicId);
      setShowColors(false);
    } else {
      setShowColors(true);
    }
  };

  const mainClass = cx({
    main: true,
    [colorsStatic[colorId]]: true,
  });

  return (
    <div className={mainClass}>
      <RelicView
        geometry={cardGeometry}
        TitleSlot={{
          ...TitleHex,
          props: {
            title: title.value,
            titleVisible: !showColors,
            centered: false,
            muted: purged,
            redpainted: clickCount > 0,
            onClick: titleClickHandler,
          },
        }}
        PlayerSlot={{
          ...PlayerHex,
          props: {
            colorId,
            striped,
            onClick: playerClickHandler,
            content,
            contentVisible,
          },
        }}
        ColorsSlot={
          showColors
            ? {
                ...ColorsHex,
                props: {
                  colors,
                  onClick: colorsClickHandler,
                },
              }
            : {}
        }
        PointSlot={
          havePoint && !showColors
            ? {
                ...PointHex,
                props: {
                  colored: pointTaken,
                  onClick: pointClickHandler,
                },
              }
            : {}
        }
        FrameSlot={{
          ...FrameHex,
          props: {
            description: description.value,
            label,
            muted: purged,
          },
        }}
      />
    </div>
  );
};

export default GameplayCardItem;
