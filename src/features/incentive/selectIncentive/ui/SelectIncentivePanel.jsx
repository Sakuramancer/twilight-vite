import { FilterSection, Overlay } from "shared/ui";
import SelectIncentiveContent from "./SelectIncentiveContent";
import classes from "./SelectIncentivePanel.module.css";

const filters = { stage1: true, stage2: true, secret: false };

const SelectIncentivePanel = ({ onDiscard, onConfirm }) => {
  return (
    <Overlay
      className={classes.container}
      containerId="incentives"
      onDiscard={onDiscard}
      onConfirm={onConfirm}
      withScroll={true}
    >
      <SelectIncentiveContent initialFilters={filters} />
    </Overlay>
  );
};

export { SelectIncentivePanel };
