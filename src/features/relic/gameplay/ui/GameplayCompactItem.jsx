import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { useTimer } from "shared/lib";
import { useStore } from "shared/store";
import { playerSelectors } from "entities/player";
import {
  relicSelectors,
  getRelicCommands,
  compactGeometry,
  ColorsHex,
  PlayerHex,
  PointHex,
  RelicView,
  TitleHex,
} from "entities/relic";
import classes from "./GameplayCompactItem.module.css";

const cx = classNames.bind(classes);

const GameplayCompactItem = ({ relicId }) => {
  const { colorId, state, meta } = useStore(relicSelectors.makeRelic(relicId));
  const players = useStore(playerSelectors.selectPlayers);

  const { title, havePoint } = meta;
  const { purged, playerIndex, pointTaken } = state;

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
                  colors: players,
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
