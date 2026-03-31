import classes from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <div className={classes.header}>
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export { Header };
