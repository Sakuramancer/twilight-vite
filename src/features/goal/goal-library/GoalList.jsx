import { GoalCard } from "entities/goal/ui";
import { sortByRankAndTitle } from "entities/objective/model";
import { goalsStatic } from "entities/goal/model";
import classes from "./GoalList.module.css";

const GoalList = ({ filters, onConfirm }) => {
  const filterFunc = (card) =>
    filters[card.phase] && filters[card.stage] && filters[card.expansion];

  return (
    <div className={classes.main}>
      {Object.values(goalsStatic)
        .filter(filterFunc)
        .sort(sortByRankAndTitle)
        .map((card) => (
          <GoalCard key={card.id} cardId={card.id} onConfirm={onConfirm} />
        ))}
    </div>
  );
};

export default GoalList;
