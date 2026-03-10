import { factionSelectors } from "../../model/selectors";
import FactionBadge from "./FactionBadge";
import classes from "./FactionList.module.css";

const FactionList = ({ className, isActivated, onSelection }) => {
  const factionIds = factionSelectors.sortedIds;

  return (
    <div className={className}>
      <div className={classes.main}>
        {factionIds.map((factionId) => (
          <FactionBadge
            key={factionId}
            factionId={factionId}
            isActivated={isActivated}
            onClick={onSelection}
          />
        ))}
      </div>
    </div>
  );
};

export { FactionList };
