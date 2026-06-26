import { useDocumentTitle, useGoalsFilter, useSearch } from "shared/lib";
import {
  FilterSection,
  Header,
  LinkButton,
  ScrollToTop,
  SearchField,
} from "shared/ui";
import { goalSelectors, goalsSearchIndex } from "entities/goal";
import GoalList from "./GoalList";
import classes from "./GoalsPage.module.css";

const GoalsPage = () => {
  useDocumentTitle("Карты целей | Сумерки");
  const [filters, handler, data] = useGoalsFilter();
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
      <GoalList goalIds={resultIds} />
      <ScrollToTop />
    </div>
  );
};

export { GoalsPage };
