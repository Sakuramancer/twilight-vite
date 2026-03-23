import { useObjectivesFilter } from "core/hooks";
import { FilterSection, useOverlayContext } from "core/ui";
import { goalsStatic } from "core/goal/model";
import { GoalCard } from "entities/goal/ui";
import { sortByRankAndTitle } from "entities/objective/model";
import classes from "./SelectObjectiveContent.module.css";

const SelectObjectiveContent = ({ initialFilters }) => {
  const [filters, handler, data] = useObjectivesFilter(initialFilters);
  const { onConfirm } = useOverlayContext();
  const filterFunc = (card) =>
    filters[card.phase] && filters[card.stage] && filters[card.expansion];

  return (
    <div className={classes.main}>
      <FilterSection filters={filters} handler={handler} data={data} />
      <div className={classes.body}>
        {Object.values(goalsStatic)
          .filter(filterFunc)
          .sort(sortByRankAndTitle)
          .map((card) => (
            <GoalCard key={card.id} cardId={card.id} onConfirm={onConfirm} />
          ))}
      </div>
    </div>
  );
};

export default SelectObjectiveContent;
