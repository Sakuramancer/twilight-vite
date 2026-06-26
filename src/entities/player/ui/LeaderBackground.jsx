import { useState } from "react";
import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { useTimer } from "shared/lib";
import { useStore } from "shared/store";
import { factionsAssets } from "../assets";
import { isLeadersEqual, playerSelectors } from "../model/selectors";
import classes from "./LeaderBackground.module.css";

const cx = classNames.bind(classes);

const LeaderBackground = () => {
  const [stableLeader, setStableLeader] = useState({ index: -1 });
  const leader = useStore(playerSelectors.selectLeader);
  const { isActive: exitState, startTimer } = useTimer(500);

  const isLeaderSelected = stableLeader.index > -1;
  const { src, alt } =
    factionsAssets[stableLeader?.factionId ?? "_unknown"].portrait;

  if (!isLeadersEqual(stableLeader, leader)) {
    if (!isLeaderSelected) {
      setStableLeader(leader);
    } else if (!exitState) {
      startTimer(() => setStableLeader(leader));
    }
  }

  const backgroundClass = cx({
    background: true,
    [colorClasses[stableLeader.colorId]]: isLeaderSelected,
    gradient: isLeaderSelected,
    gradientEnter: !exitState && isLeaderSelected,
    gradientExit: exitState,
  });

  const factionClass = cx({
    faction: true,
    factionEnter: !exitState,
    factionExit: exitState,
  });

  return (
    <div className={backgroundClass}>
      {isLeaderSelected && <img className={factionClass} src={src} alt={alt} />}
    </div>
  );
};

export { LeaderBackground };
