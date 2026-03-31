import { useAgendasFilter, useSearch } from "core/hooks";
import {
  FilterSection,
  Header,
  LinkButton,
  ScrollToTop,
  SearchField,
  useOverlayContext,
} from "core/ui";
import { agendaSelectors, agendasSearchIndex } from "entities/agenda/model";
import AgendasTable from "./AgendasTable";
import classes from "./AgendasLibrary.module.css";

const AgendasLibrary = () => {
  const [filters, handler, data] = useAgendasFilter();
  const overlayProps = useOverlayContext();

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
      <AgendasTable agendaIds={resultIds} {...overlayProps} />
      <ScrollToTop />
    </div>
  );
};

export { AgendasLibrary };
