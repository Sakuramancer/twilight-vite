import { useDocumentTitle, useRelicsFilter, useSearch } from "shared/lib";
import {
  FilterSection,
  Header,
  LinkButton,
  ScrollToTop,
  SearchField,
} from "shared/ui";
import { relicSelectors, relicsSearchIndex } from "entities/relic";
import RelicsTable from "./RelicsTable";
import classes from "./RelicsPage.module.css";

const RelicsPage = () => {
  useDocumentTitle("Карты реликвий | Сумерки");
  const [filters, handler, data] = useRelicsFilter();
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
      <RelicsTable relicIds={resultIds} />
      <ScrollToTop />
    </div>
  );
};

export { RelicsPage };
