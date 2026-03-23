import { useState } from "react";
import classNames from "classnames/bind";
import { useTimer } from "core/hooks";
import { useStore } from "core/store";
import { factionsAssets } from "entities/faction/assets";
import { scoreSelectors } from "../model/selectors";
import colorClasses from "core/data/colors.module.css";
import classes from "./LeaderBackground.module.css";

const cx = classNames.bind(classes);

const LeaderBackground = () => {
  const [stableLeader, setStableLeader] = useState({ index: -1 });
  const leader = useStore(scoreSelectors.selectLeader);
  const { isActive: exitState, startTimer } = useTimer(500);

  if (
    stableLeader.index !== leader.index ||
    stableLeader.colorId !== leader.colorId ||
    stableLeader.factionId !== leader.factionId
  ) {
    if (stableLeader.index === -1) {
      setStableLeader(leader);
    } else if (!exitState) {
      startTimer(() => setStableLeader(leader));
    }
  }

  const backgroundClass = cx({
    background: true,
    [colorClasses[stableLeader.colorId]]: stableLeader.index > -1,
    gradient: stableLeader.index > -1,
    gradientEnter: !exitState && stableLeader.index > -1,
    gradientExit: exitState,
  });

  const factionClass = cx({
    faction: true,
    factionEnter: !exitState,
    factionExit: exitState,
  });

  return (
    <div className={backgroundClass}>
      {stableLeader.index > -1 && (
        <img
          className={factionClass}
          src={factionsAssets[stableLeader.factionId].portrait.src}
          alt={factionsAssets[stableLeader.factionId].portrait.alt}
        />
      )}
    </div>
  );
};

export { LeaderBackground };
