import { PLAYER_COUNT } from "shared/config";
import { HexLayout } from "shared/ui";
import { PointCounterItem } from "./PointCounterItem";
import classes from "./PointCounter.module.css";

const PointCounter = ({ className }) => {
  return (
    <div className={className}>
      <HexLayout className={classes.grid}>
        {Array.from({ length: PLAYER_COUNT }, (_, index) => (
          <PointCounterItem key={index} position={index} />
        ))}
      </HexLayout>
    </div>
  );
};

export { PointCounter };
