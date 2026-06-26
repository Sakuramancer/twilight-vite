import { useGoalsFilter, useSearch } from "shared/lib";
import {
  FilterSection,
  Header,
  SearchField,
  useOverlayContext,
} from "shared/ui";
import { goalSelectors, goalsSearchIndex } from "entities/goal";
import { GoalCard } from "entities/goal";
import classes from "./SelectObjectiveContent.module.css";

const SelectObjectiveContent = ({ initialFilters }) => {
  const [filters, handler, data] = useGoalsFilter(initialFilters);
  const { onConfirm } = useOverlayContext();
  const goalIds = goalSelectors.allSortedIdsWithFilters(filters);
  const [inputValue, setInputValue, resultIds] = useSearch(
    goalsSearchIndex,
    goalIds,
  );

  const clearHandler = () => setInputValue("");

  return (
    <div className={classes.main}>
      <Header>
        <FilterSection filters={filters} handler={handler} data={data} />
        <SearchField
          aria-label="Поиск целей"
          value={inputValue}
          onChange={setInputValue}
          onClear={clearHandler}
        />
      </Header>
      <div className={classes.body}>
        {resultIds.map((goalId) => (
          <GoalCard key={goalId} cardId={goalId} onConfirm={onConfirm} />
        ))}
      </div>
    </div>
  );
};

export default SelectObjectiveContent;
