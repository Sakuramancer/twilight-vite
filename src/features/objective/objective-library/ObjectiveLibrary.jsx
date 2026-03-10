import { useObjectivesFilter } from "core/hooks/useFilter";
import { useOverlayContext } from "core/ui/OverlayContext";
import FilterSection from "core/ui/FilterSection";
import ScrollToTop from "core/ui/ScrollToTop";
import ObjectiveList from "./ObjectiveList";
import LinkButton from "core/ui/LinkButton";
import classes from "./ObjectiveLibrary.module.css";

const ObjectiveLibrary = () => {
  const [filters, handler, data] = useObjectivesFilter();
  const overlayProps = useOverlayContext();

  return (
    <div className={classes.main}>
      <div className={classes.button}>
        <LinkButton to="/">⇐ Назад</LinkButton>
      </div>
      <FilterSection filters={filters} handler={handler} data={data} />
      <ObjectiveList filters={filters} {...overlayProps} />
      <ScrollToTop />
    </div>
  );
};

export { ObjectiveLibrary };
