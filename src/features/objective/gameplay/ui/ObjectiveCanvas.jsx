import classNames from "classnames/bind";
import { useTimer } from "core/hooks";
import { HexedCanvas, hexWithPetals } from "core/canvas";
import { useStore } from "core/store";
import { getObjectiveCommands } from "entities/objective/ports";
import { objectivesStatic } from "entities/objective/model";
import colors from "core/data/colors.module.css";
import classes from "./ObjectiveCanvas.module.css";
import petals from "./petals.module.css";

const cx = classNames.bind(classes);

const ObjectiveCanvas = ({ className, cardIndex, onSelectCard }) => {
  const { isActive: redpainted, startTimer, stopTimer } = useTimer(1000);
  const petalColors = useStore((s) => s.colors);
  const { cardId, points } = useStore((s) => s.objectives[cardIndex]);

  const isActiveFlower = cardId;
  const stage = objectivesStatic[cardId]?.stage;

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

  const petalClasses = petalColors.map((color, index) =>
    cx({
      flower: true,
      activePetal: isActiveFlower,
      checkedPetal: isActiveFlower && points[index],
      uncheckedPetal: !isActiveFlower || !points[index],
      [colors[color.colorId]]: true,
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
