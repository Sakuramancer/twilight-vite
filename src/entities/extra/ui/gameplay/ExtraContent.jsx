import { PLAYER_COUNT } from "core/player";
import ExtraField from "./ExtraField";
import classes from "./ExtraContent.module.css";

const ExtraContent = () => {
  return (
    <>
      {Array.from({ length: PLAYER_COUNT }, (_, index) => (
        <ExtraField className={classes.field} key={index} playerIndex={index} />
      ))}
    </>
  );
};

export { ExtraContent };
