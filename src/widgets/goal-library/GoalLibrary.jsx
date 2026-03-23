import { useObjectivesFilter } from "core/hooks";
import {
  FilterSection,
  LinkButton,
  ScrollToTop,
  useOverlayContext,
} from "core/ui";
import GoalList from "./GoalList";
import classes from "./GoalLibrary.module.css";

const GoalLibrary = () => {
  const [filters, handler, data] = useObjectivesFilter();
  const overlayProps = useOverlayContext();

  return (
    <div className={classes.main}>
      <div className={classes.button}>
        <LinkButton to="/">⇐ Назад</LinkButton>
      </div>
      <FilterSection filters={filters} handler={handler} data={data} />
      <GoalList filters={filters} {...overlayProps} />
      <ScrollToTop />
    </div>
  );
};

export { GoalLibrary };
