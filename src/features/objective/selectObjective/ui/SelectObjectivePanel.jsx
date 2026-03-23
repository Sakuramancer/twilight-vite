import { FilterSection, Overlay } from "core/ui";
import SelectObjectiveContent from "./SelectObjectiveContent";
import classes from "./SelectObjectivePanel.module.css";

const SelectObjectivePanel = ({ filters, onDiscard, onConfirm }) => {
  return (
    <Overlay
      className={classes.container}
      containerId="objectives"
      onDiscard={onDiscard}
      onConfirm={onConfirm}
      withScroll={true}
    >
      <SelectObjectiveContent initialFilters={filters} />
    </Overlay>
  );
};

export { SelectObjectivePanel };
