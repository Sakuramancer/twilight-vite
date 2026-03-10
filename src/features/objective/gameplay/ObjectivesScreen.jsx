import { useObjectivesFilter } from "core/hooks/useFilter";
import FilterSection from "core/ui/FilterSection";
import ScrollToTop from "core/ui/ScrollToTop";
import { useOverlayContext } from "core/ui/OverlayContext";
import Overlay from "core/ui/Overlay";
import GoalList from "../../goal/goal-library/GoalList";
import classes from "./ObjectivesScreen.module.css";

const ObjectivesScreen = ({
  filters: initialFilters,
  onDiscard,
  onConfirm,
}) => {
  const [filters, handler, data] = useObjectivesFilter(initialFilters);
  const overlayProps = useOverlayContext();

  return (
    <Overlay
      className={classes.container}
      containerId="objectives"
      onDiscard={onDiscard}
      onConfirm={onConfirm}
      withScroll={true}
    >
      <div className={classes.main}>
        <FilterSection filters={filters} handler={handler} data={data} />
        <GoalList
          filters={filters}
          onConfirm={onConfirm}
          {...overlayProps}
        />
      </div>
    </Overlay>
  );
};

export default ObjectivesScreen;
