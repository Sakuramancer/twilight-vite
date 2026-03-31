import { FilterSection, Header, SearchField, useOverlayContext } from "core/ui";
import { useGoalsFilter, useSearch } from "core/hooks";
import { goalsSearchIndex } from "core/goal/model";
import { GoalCard } from "entities/goal/ui";
import { secretSelectors } from "entities/secret/model";
import classes from "./SelectSecretContent.module.css";

const SelectSecretContent = () => {
  const initialFilters = { stage1: false, stage2: false, secret: true };
  const [filters, handler, data] = useGoalsFilter(initialFilters);
  const { onConfirm } = useOverlayContext();

  const sortedIds = secretSelectors.sortedIds;
  const [inputValue, setInputValue, resultIds] = useSearch(
    goalsSearchIndex,
    sortedIds,
  );

  const clearHandler = () => setInputValue("");

  return (
    <div className={classes.main}>
      <Header>
        <FilterSection filters={filters} handler={handler} data={data} />
        <SearchField
          aria-label="Поиск секретов"
          value={inputValue}
          onChange={setInputValue}
          onClear={clearHandler}
        />
      </Header>
      <div className={classes.body}>
        {resultIds.map((cardId) => (
          <GoalCard key={cardId} cardId={cardId} onConfirm={onConfirm} />
        ))}
      </div>
    </div>
  );
};

export { SelectSecretContent };
