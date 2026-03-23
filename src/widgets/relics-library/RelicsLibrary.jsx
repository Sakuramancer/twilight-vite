import { useRelicsFilter } from "core/hooks";
import {
  FilterSection,
  LinkButton,
  ScrollToTop,
  useOverlayContext,
} from "core/ui";
import RelicsTable from "./RelicsTable";
import classes from "./RelicsLibrary.module.css";

const RelicsLibrary = () => {
  const [filters, handler, data] = useRelicsFilter();
  const overlayProps = useOverlayContext();

  return (
    <div className={classes.main}>
      <div className={classes.button}>
        <LinkButton to="/">⇐ Назад</LinkButton>
      </div>
      <FilterSection filters={filters} handler={handler} data={data} />
      <RelicsTable filters={filters} {...overlayProps} />
      <ScrollToTop />
    </div>
  );
};

export { RelicsLibrary };
