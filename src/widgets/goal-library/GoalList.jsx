import { goalsStatic } from "core/goal/model";
import { GoalCard } from "entities/goal/ui";
import { sortByRankAndTitle } from "entities/objective/model";
import classes from "./GoalList.module.css";

const GoalList = ({ filters }) => {
  const filterFunc = (card) =>
    filters[card.phase] && filters[card.stage] && filters[card.expansion];

  return (
    <div className={classes.main}>
      {Object.values(goalsStatic)
        .filter(filterFunc)
        .sort(sortByRankAndTitle)
        .map((card) => (
          <GoalCard key={card.id} cardId={card.id} />
        ))}
    </div>
  );
};

export default GoalList;
