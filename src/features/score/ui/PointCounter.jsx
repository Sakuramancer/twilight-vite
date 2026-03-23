import { PLAYER_COUNT } from "core/player";
import { HexLayout } from "core/ui";
import Clock from "./Clock";
import PointCounterItem from "./PointCounterItem";
import classes from "./PointCounter.module.css";

const PointCounter = ({ className }) => {
  return (
    <div className={className}>
      <HexLayout className={classes.grid}>
        {Array.from({ length: PLAYER_COUNT }, (_, index) => (
          <PointCounterItem key={index} position={index} />
        ))}
        <Clock className={classes.clock} />
      </HexLayout>
    </div>
  );
};

export { PointCounter };
