import classNames from "classnames/bind";
import { useTimer } from "core/hooks";
import { useStore } from "core/store";
import { relicSelectors } from "entities/relic/model";
import { getRelicCommands } from "entities/relic/ports";
import {
  compactGeometry,
  ColorsHex,
  PlayerHex,
  PointHex,
  RelicView,
  TitleHex,
} from "entities/relic/ui";
import colorClasses from "core/data/colors.module.css";
import classes from "./GameplayCompactItem.module.css";

const cx = classNames.bind(classes);

const GameplayCompactItem = ({ relicId }) => {
  const {
    colorId,
    state: relicState,
    static: relicStatic,
  } = useStore(relicSelectors.makeRelic(relicId));
  const colors = useStore((s) => s.colors);

  const { title, havePoint } = relicStatic;
  const { purged, playerIndex, pointTaken } = relicState;

  const commands = getRelicCommands();

  const {
    isActive: redpainted,
    startTimer: showRedpainted,
    stopTimer: hideRedpainted,
  } = useTimer(1000);

  const {
    isActive: colorsShown,
    startTimer: showColors,
    stopTimer: hideColors,
  } = useTimer(3000);

  const striped = (!colorsShown && purged) || (colorsShown && !purged);
  const content = colorsShown && purged ? "⇑" : "?";
  const contentVisible = playerIndex === -1 || (colorsShown && purged);

  const titleClickHandler = colorsShown
    ? undefined
    : () => {
        if (!redpainted) {
          showRedpainted();
          return;
        }
        hideRedpainted();
        commands.resetRelic(relicId);
      };

  const pointClickHandler = () => {
    commands.toggleRelicPointTaken(relicId);
  };

  const colorsClickHandler = (playerIndex) => {
    hideColors();
    commands.assignRelicToPlayer(relicId, playerIndex);
  };

  const playerClickHandler = () => {
    if (!colorsShown) {
      showColors();
      return;
    }
    hideColors();
    commands.toggleRelicPurged(relicId);
  };

  const mainClass = cx({
    main: true,
    [colorClasses[colorId]]: true,
  });

  return (
    <div className={mainClass}>
      <RelicView
        geometry={compactGeometry}
        TitleSlot={{
          ...TitleHex,
          props: {
            title: title.value,
            titleVisible: !colorsShown,
            centered: false,
            muted: purged,
            redpainted,
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
          colorsShown
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
          havePoint && !colorsShown
            ? {
                ...PointHex,
                props: {
                  colored: pointTaken,
                  onClick: pointClickHandler,
                },
              }
            : {}
        }
      />
    </div>
  );
};

export default GameplayCompactItem;
