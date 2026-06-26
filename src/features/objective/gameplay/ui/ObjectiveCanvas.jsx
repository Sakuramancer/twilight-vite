import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { useTimer } from "shared/lib";
import { useStore } from "shared/store";
import { HexedCanvas, hexWithPetals } from "shared/ui";
import {
  getObjectiveCommands,
  objectiveSelectors,
  objectivesMeta,
} from "entities/objective";
import { playerSelectors } from "entities/player";
import petals from "./petals.module.css";
import classes from "./ObjectiveCanvas.module.css";

const cx = classNames.bind(classes);

const ObjectiveCanvas = ({ className, cardIndex, onSelectCard }) => {
  const { isActive: redpainted, startTimer, stopTimer } = useTimer(1000);
  const players = useStore(playerSelectors.selectPlayers);
  const { cardId, points } = useStore(
    objectiveSelectors.makeObjectiveByIndex(cardIndex),
  );

  const isActiveFlower = cardId;
  const stage = objectivesMeta[cardId]?.stage;

  const commands = getObjectiveCommands();
  const hexClickHandler = isActiveFlower
    ? () => {
        if (!redpainted) {
          startTimer();
          return;
        }
        stopTimer();
        commands.resetObjective(cardIndex);
      }
    : () => {
        onSelectCard(cardIndex);
      };

  const petalClickHandler = isActiveFlower
    ? (index) => commands.togglePointsForPlayer(cardIndex, index)
    : undefined;

  const hexClass = cx({
    hex: true,
    "hex-stage1-inactive": !isActiveFlower && cardIndex < 5,
    "hex-stage2-inactive": !isActiveFlower && cardIndex >= 5,
    [`hex-${stage}-active`]: isActiveFlower,
    "hex-beforeDelete": isActiveFlower && redpainted,
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

  const plusClass = cx({
    "plus-stage1": cardIndex < 5,
    "plus-stage2": cardIndex >= 5,
  });

  return (
    <div className={className}>
      <HexedCanvas className={classes.canvas} geometry={hexWithPetals}>
        <HexedCanvas.Flower
          petalClasses={petalClasses}
          onPetalClick={petalClickHandler}
        />
        <HexedCanvas.Hex className={hexClass} onClick={hexClickHandler} />
        {!isActiveFlower && <HexedCanvas.Plus className={plusClass} />}
      </HexedCanvas>
    </div>
  );
};

export default ObjectiveCanvas;
