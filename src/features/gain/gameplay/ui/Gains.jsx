import { gainsMeta } from "entities/gain";
import Gain from "./Gain";
import classes from "./Gains.module.css";

const Gains = ({ className }) => {
  return (
    <div className={className}>
      {Object.values(gainsMeta).map(({ id: gainId }) => (
        <Gain key={gainId} className={classes.gain} gainId={gainId} />
      ))}
    </div>
  );
};

export { Gains };
