import { useStore } from "shared/store";
import { selectIsIncentiveVisible } from "features/incentive/gameplay";
import { selectIsLeakVisible } from "features/leak/gameplay";
import { MecatolMain } from "features/mecatol/gameplay";
import { Styx } from "features/styx/gameplay";
import { IncentiveGain } from "./IncentiveGain";
import { LeakGain } from "./LeakGain";
import classes from "./Gains.module.css";

const Gains = ({ className }) => {
  const isIncentiveVisible = useStore(selectIsIncentiveVisible);
  const isLeakVisible = useStore(selectIsLeakVisible);

  return (
    <div className={className}>
      <MecatolMain className={classes.mecatol} />
      <Styx className={classes.styx} />
      <div className={classes.flex}>
        {isIncentiveVisible && <IncentiveGain className={classes.item} />}
        {isLeakVisible && <LeakGain className={classes.item} />}
      </div>
    </div>
  );
};

export { Gains };
