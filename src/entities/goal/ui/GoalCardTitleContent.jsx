import { goalsMeta } from "../model/data";
import classes from "./GoalCardTitleContent.module.css";

const GoalCardTitleContent = ({ className, cardId }) => {
  const card = goalsMeta[cardId];

  return (
    <div className={className}>
      <div className={classes.content}>
        <div className={classes.title}>{card.title.value}</div>
      </div>
    </div>
  );
};

export { GoalCardTitleContent };
