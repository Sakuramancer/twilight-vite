import { useState } from "react";
import classNames from "classnames/bind";
import HexedCanvas from "core/canvas/HexedCanvas";
import { hexWithPetals } from "core/canvas/geometry";
import colors from "core/data/colors.module.css";
import { useStore } from "core/store/StoreContext";
import { getObjectiveCommands } from "entities/objective/ports";
import { objectivesStatic } from "entities/objective/model";
import classes from "./ObjectiveCanvas.module.css";
import petals from "./petals.module.css";

const cx = classNames.bind(classes);

const ObjectiveCanvas = ({ className, cardIndex, onSelectCard }) => {
  const [clickCount, setClickCount] = useState(0);
  const petalColors = useStore((s) => s.colors);
  const { cardId, points } = useStore((s) => s.objectives[cardIndex]);

  const isActiveFlower = cardId;
  const stage = objectivesStatic[cardId]?.stage;

  const commands = getObjectiveCommands();
  const hexClickHandler = isActiveFlower
    ? () => {
        if (clickCount === 0) {
          setClickCount(1);
          setTimeout(() => {
            setClickCount(0);
          }, 1000);
          return;
        }
        setClickCount(0);
        commands.resetObjective(cardIndex);
      }
    : () => {
        onSelectCard(cardIndex);
      };

  const petalClickHandlers = isActiveFlower
    ? petalColors.map(
        (_, index) => () => commands.togglePointsForPlayer(cardIndex, index),
      )
    : undefined;

  const hexClass = cx({
    hex: true,
    "hex-stage1-inactive": !isActiveFlower && cardIndex < 5,
    "hex-stage2-inactive": !isActiveFlower && cardIndex >= 5,
    [`hex-${stage}-active`]: isActiveFlower,
    "hex-beforeDelete": isActiveFlower && clickCount,
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
          petalClickHandlers={petalClickHandlers}
        />
        <HexedCanvas.Hex className={hexClass} onClick={hexClickHandler} />
        {!isActiveFlower && <HexedCanvas.Plus className={plusClass} />}
      </HexedCanvas>
    </div>
  );
};

export default ObjectiveCanvas;
