import { GoalCard } from "entities/goal/ui";
import { objectivesStatic, sortByRankAndTitle } from "entities/objective/model";
import classes from "./ObjectiveList.module.css";

const ObjectiveList = ({ filters, onConfirm }) => {
  const filterFunc = (card) =>
    filters[card.phase] && filters[card.stage] && filters[card.expansion];

  return (
    <div className={classes.main}>
      {Object.values(objectivesStatic)
        .filter(filterFunc)
        .sort(sortByRankAndTitle)
        .map((card) => (
          <GoalCard key={card.id} cardId={card.id} onConfirm={onConfirm} />
        ))}
    </div>
  );
};

export default ObjectiveList;
