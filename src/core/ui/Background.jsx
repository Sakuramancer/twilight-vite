import { Outlet } from "react-router-dom";
import classes from "./Background.module.css";

const Background = () => {
  return (
    <div className={classes.main}>
      <div className={classes.background} />
      <Outlet />
    </div>
  );
};

export { Background };
