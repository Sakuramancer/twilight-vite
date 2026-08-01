import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { useTimer } from "shared/lib";
import { useStore } from "shared/store";
import { HexedCanvas, hexWithPetals } from "shared/ui";
import { petals } from "entities/goal";
import {
  getIncentiveCommands,
  incentiveSelectors,
  incentivesMeta,
} from "entities/incentive";
import { playerSelectors } from "entities/player";
import classes from "./IncentiveCanvas.module.css";

const cx = classNames.bind(classes);

const IncentiveCanvas = ({ onSelectCard }) => {
  const { isActive: redpainted, startTimer, stopTimer } = useTimer(1000);
  const players = useStore(playerSelectors.selectPlayers);
  const { cardId, points } = useStore(incentiveSelectors.selectIncentive);

  const isActiveFlower = cardId;
  const stage = incentivesMeta[cardId]?.stage;

  const commands = getIncentiveCommands();
  const hexClickHandler = isActiveFlower
    ? () => {
        if (!redpainted) {
          startTimer();
          return;
        }
        stopTimer();
        commands.resetIncentive();
      }
    : onSelectCard;

  const petalClickHandler = isActiveFlower
    ? (playerIndex) => commands.togglePointsForPlayer(playerIndex)
    : undefined;

  const hexClass = cx({
    hex: true,
    "hex-inactive": !isActiveFlower,
    [`hex-${stage}-active`]: isActiveFlower,
    "hex-redpainted": isActiveFlower && redpainted,
  });

  const petalClasses = players.map((player, index) =>
    cx({
      flower: true,
      activePetal: isActiveFlower,
      checkedPetal: isActiveFlower && points[index],
      uncheckedPetal: !isActiveFlower || !points[index],
      [colorClasses[player.colorId]]: true,
      [petals[`petalIndex${index}`]]: true,
    }),
  );

  return (
    <div className={classes.main}>
      <HexedCanvas className={classes.canvas} geometry={hexWithPetals}>
        <HexedCanvas.Flower
          petalClasses={petalClasses}
          onPetalClick={petalClickHandler}
        />
        <HexedCanvas.Hex className={hexClass} onClick={hexClickHandler} />
        {!isActiveFlower && <HexedCanvas.Plus className={classes.plus} />}
      </HexedCanvas>
    </div>
  );
};

export default IncentiveCanvas;
