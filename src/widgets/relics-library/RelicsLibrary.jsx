import { useRelicsFilter, useSearch } from "core/hooks";
import {
  FilterSection,
  Header,
  LinkButton,
  ScrollToTop,
  SearchField,
  useOverlayContext,
} from "core/ui";
import { relicSelectors, relicsSearchIndex } from "entities/relic/model";
import RelicsTable from "./RelicsTable";
import classes from "./RelicsLibrary.module.css";

const RelicsLibrary = () => {
  const [filters, handler, data] = useRelicsFilter();
  const overlayProps = useOverlayContext();
  const relicIds = relicSelectors.allSortedIdsWithFilters(filters);
  const [inputValue, setInputValue, resultIds] = useSearch(
    relicsSearchIndex,
    relicIds,
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
          aria-label="Поиск реликвий"
          value={inputValue}
          onChange={setInputValue}
          onClear={clearHandler}
        />
      </Header>
      <RelicsTable relicIds={resultIds} {...overlayProps} />
      <ScrollToTop />
    </div>
  );
};

export { RelicsLibrary };
