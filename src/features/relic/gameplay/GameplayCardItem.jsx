import { useState } from "react";
import classNames from "classnames/bind";
import { useStore } from "core/store/StoreContext";
import { getExpansionLabel, relicSelectors } from "entities/relic/model";
import { getRelicCommands } from "entities/relic/ports";
import {
  cardGeometry,
  FrameHex,
  PlayerHex,
  PointHex,
  RelicView,
  TitleHex,
} from "entities/relic/ui";
import colors from "core/data/colors.module.css";
import classes from "./GameplayCardItem.module.css";

const cx = classNames.bind(classes);

const GameplayCardItem = ({ relicId }) => {
  const {
    colorId,
    state: relicState,
    static: relicStatic,
  } = useStore(relicSelectors.makeRelic(relicId));

  const { title, havePoint, description, expansion } = relicStatic;
  const { purged, playerIndex, pointTaken } = relicState;
  const label = getExpansionLabel(expansion);

  const commands = getRelicCommands();
  const [clickCount, setClickCount] = useState(0);

  const titleClickHandler = () => {
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

  const playerClickHandler = () => {
    commands.toggleRelicPurged(relicId);
  };

  const mainClass = cx({
    main: true,
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
            striped: purged,
            onClick: playerClickHandler,
            visible: playerIndex === -1,
          },
        }}
        PointSlot={
          havePoint
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
