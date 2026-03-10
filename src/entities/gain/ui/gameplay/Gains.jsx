import { gainsStatic } from "../../model/gains.data";
import Gain from "./Gain";
import classes from "./Gains.module.css";

const Gains = ({ className }) => {
  return (
    <div className={className}>
      {Object.values(gainsStatic).map(({ id: gainId }) => (
        <Gain key={gainId} className={classes.gain} gainId={gainId} />
      ))}
    </div>
  );
};

export { Gains };
