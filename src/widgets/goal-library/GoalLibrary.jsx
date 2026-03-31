import { useGoalsFilter, useSearch } from "core/hooks";
import {
  FilterSection,
  Header,
  LinkButton,
  ScrollToTop,
  SearchField,
  useOverlayContext,
} from "core/ui";
import { goalSelectors, goalsSearchIndex } from "core/goal/model";
import GoalList from "./GoalList";
import classes from "./GoalLibrary.module.css";

const GoalLibrary = () => {
  const [filters, handler, data] = useGoalsFilter();
  const overlayProps = useOverlayContext();

  const goalIds = goalSelectors.allSortedIdsWithFilters(filters);
  const [inputValue, setInputValue, resultIds] = useSearch(
    goalsSearchIndex,
    goalIds,
  );
  const clearHandler = () => setInputValue("");

  return (
    <div className={classes.main}>
      <Header>
        <div className={classes.button}>
          <LinkButton to="/">⇐ Назад</LinkButton>
        </div>
        <FilterSection filters={filters} handler={handler} data={data} />
        <SearchField
          aria-label="Поиск целей"
          value={inputValue}
          onChange={setInputValue}
          onClear={clearHandler}
        />
      </Header>
      <GoalList goalIds={resultIds} {...overlayProps} />
      <ScrollToTop />
    </div>
  );
};

export { GoalLibrary };
