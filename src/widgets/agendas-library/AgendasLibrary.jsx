import { useAgendasFilter } from "core/hooks";
import {
  FilterSection,
  LinkButton,
  ScrollToTop,
  useOverlayContext,
} from "core/ui";
import AgendasTable from "./AgendasTable";
import classes from "./AgendasLibrary.module.css";

const AgendasLibrary = () => {
  const [filters, handler, data] = useAgendasFilter();
  const overlayProps = useOverlayContext();

  return (
    <div className={classes.main}>
      <div className={classes.button}>
        <LinkButton to="/">⇐ Назад</LinkButton>
      </div>
      <FilterSection filters={filters} handler={handler} data={data} />
      <AgendasTable filters={filters} {...overlayProps} />
      <ScrollToTop />
    </div>
  );
};

export { AgendasLibrary };
