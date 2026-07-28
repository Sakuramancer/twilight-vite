import { MecatolMain } from "features/mecatol/gameplay";
import { Styx } from "features/styx/gameplay";
import classes from "./Gains.module.css";

const Gains = ({ className }) => {
  return (
    <div className={className}>
      <MecatolMain className={classes.mecatol} />
      <Styx className={classes.styx} />
    </div>
  );
};

export { Gains };
