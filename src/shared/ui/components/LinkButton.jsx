import { Link } from "react-router-dom";
import buttons from "./buttons.module.css";
import classes from "./LinkButton.module.css";

const LinkButton = ({ to, className, children, ...props }) => {
  return (
    <Link to={to} className={classes.link}>
      <div
        className={[classes.button, className ?? buttons.blue].join(" ")}
        {...props}
      >
        {children}
      </div>
    </Link>
  );
};

export { LinkButton };
