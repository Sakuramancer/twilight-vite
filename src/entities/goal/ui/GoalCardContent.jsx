import classNames from "classnames/bind";
import GoalCardDescription from "./GoalCardDescription";
import GoalCardTitle from "./GoalCardTitle";
import { goalsStatic } from "../model";
import classes from "./GoalCardContent.module.css";

const cx = classNames.bind(classes);

const GoalCardContent = ({ className, cardId, date = -1 }) => {
  const card = goalsStatic[cardId];
  const { phase, stage, expansion } = card.content;

  const dateObj = new Date(date);
  const dateStr = `${("00" + dateObj.getHours()).slice(-2)}:${(
    "00" + dateObj.getMinutes()
  ).slice(-2)}`;

  const pointsClass = cx({
    pointsAtCenter: date === -1,
    pointsAtLeft: date !== -1,
  });

  return (
    <div className={className}>
      <div className={classes.content}>
        <GoalCardTitle className={classes.title}>
          {card.title.value}
        </GoalCardTitle>
        <div className={classes.phase}>{phase}</div>
        <GoalCardDescription className={classes.description} card={card} />
        {date === -1 && (
          <div className={pointsClass}>
            <div className={classes.pointsValue}>{stage.points}</div>
            <div className={classes.pointsLabel}>{stage.label}</div>
          </div>
        )}
        {date !== -1 && <div className={classes.date}>{dateStr}</div>}
        {expansion?.label && (
          <div className={classes.expansion}>{expansion.label}</div>
        )}
      </div>
    </div>
  );
};

export { GoalCardContent };
