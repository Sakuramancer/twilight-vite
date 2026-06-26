import { useAgendasFilter, useDocumentTitle, useSearch } from "shared/lib";
import {
  FilterSection,
  Header,
  LinkButton,
  ScrollToTop,
  SearchField,
} from "shared/ui";
import { agendaSelectors, agendasSearchIndex } from "entities/agenda";
import AgendasTable from "./AgendasTable";
import classes from "./AgendasPage.module.css";

const AgendasPage = () => {
  useDocumentTitle("Карты политики | Сумерки");
  const [filters, handler, data] = useAgendasFilter();
  const agendaIds = agendaSelectors.allSortedIdsWithFilters(filters);
  const [inputValue, setInputValue, resultIds] = useSearch(
    agendasSearchIndex,
    agendaIds,
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
          aria-label="Поиск политик"
          value={inputValue}
          onChange={setInputValue}
          onClear={clearHandler}
        />
      </Header>
      <AgendasTable agendaIds={resultIds} />
      <ScrollToTop />
    </div>
  );
};

export { AgendasPage };
