import classNames from "classnames/bind";
import { useStore } from "shared/store";
import { GoalCardContent } from "entities/goal";
import { objectiveSelectors } from "entities/objective";
import ObjectiveCanvas from "./ObjectiveCanvas";
import ObjectiveIcons from "./ObjectiveIcons";
import Timer from "./Timer";
import classes from "./ObjectiveFlower.module.css";
import petals from "./petals.module.css";

const cx = classNames.bind(classes);

const ObjectiveFlower = ({ cardIndex, onSelectCard }) => {
  const { cardId, date } = useStore(
    objectiveSelectors.makeObjectiveByIndex(cardIndex),
  );
  const dateBefore = useStore(
    objectiveSelectors.makeDateBeforeObjective(cardIndex),
  );

  const isActiveFlower = cardId;

  const mainClass = cx({
    main: true,
    [petals.onHover]: isActiveFlower,
  });

  return (
    <div className={mainClass}>
      <ObjectiveCanvas cardIndex={cardIndex} onSelectCard={onSelectCard} />
      <ObjectiveIcons className={classes.icons} cardIndex={cardIndex} />
      {isActiveFlower && (
        <GoalCardContent
          className={classes.content}
          cardId={cardId}
          date={date}
        />
      )}
      {!isActiveFlower && (
        <Timer className={classes.content} dateBefore={dateBefore} />
      )}
    </div>
  );
};

export { ObjectiveFlower };
