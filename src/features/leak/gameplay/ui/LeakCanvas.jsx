import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { useTimer } from "shared/lib";
import { useStore } from "shared/store";
import { HexedCanvas, hexWithPetals } from "shared/ui";
import { petals } from "entities/goal";
import { getLeakCommands, leakSelectors } from "entities/leak";
import { playerSelectors } from "entities/player";
import classes from "./LeakCanvas.module.css";

const cx = classNames.bind(classes);

const LeakCanvas = ({ onSelectCard }) => {
  const { isActive: redpainted, startTimer, stopTimer } = useTimer(1000);
  const players = useStore(playerSelectors.selectPlayers);
  const { cardId, points } = useStore(leakSelectors.selectLeak);

  const isActiveFlower = cardId;

  const commands = getLeakCommands();
  const hexClickHandler = isActiveFlower
    ? () => {
        if (!redpainted) {
          startTimer();
          return;
        }
        stopTimer();
        commands.resetLeak();
      }
    : onSelectCard;

  const petalClickHandler = isActiveFlower
    ? (playerIndex) => commands.togglePointsForPlayer(playerIndex)
    : undefined;

  const hexClass = cx({
    hex: true,
    "hex-inactive": !isActiveFlower,
    "hex-active": isActiveFlower,
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

export default LeakCanvas;
