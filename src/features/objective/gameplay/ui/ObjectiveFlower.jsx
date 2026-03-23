import classNames from "classnames/bind";
import { useStore } from "core/store";
import { GoalCardContent } from "entities/goal/ui";
import ObjectiveCanvas from "./ObjectiveCanvas";
import ObjectiveIcons from "./ObjectiveIcons";
import Timer from "./Timer";
import classes from "./ObjectiveFlower.module.css";
import petals from "./petals.module.css";

const cx = classNames.bind(classes);

const ObjectiveFlower = ({ cardIndex, magnifierActive, onSelectCard }) => {
  const { cardId, date } = useStore((s) => s.objectives[cardIndex]);
  const dateBefore = useStore((s) =>
    cardIndex > 0 ? s.objectives[cardIndex - 1]?.date : -1,
  );

  const isActiveFlower = cardId;

  const mainClass = cx({
    main: true,
    [petals.onHover]: isActiveFlower,
    magnified: isActiveFlower && magnifierActive,
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
