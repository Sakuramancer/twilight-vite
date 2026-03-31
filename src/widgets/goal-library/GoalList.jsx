import { GoalCard } from "entities/goal/ui";
import classes from "./GoalList.module.css";

const GoalList = ({ goalIds }) => {
  return (
    <div className={classes.main}>
      {goalIds.map((goalId) => (
        <GoalCard key={goalId} cardId={goalId} />
      ))}
    </div>
  );
};

export default GoalList;
