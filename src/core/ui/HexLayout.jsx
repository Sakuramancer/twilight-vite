import classes from "./HexLayout.module.css";

const HexLayout = ({ className, children }) => {
  return (
    <div className={className}>
      <div className={classes.grid}>{children}</div>
    </div>
  );
};

const HexLayoutItem = ({ className, children }) => {
  return (
    <div className={classes.item}>
      <div className={className}>{children}</div>
    </div>
  );
};

HexLayout.Item = HexLayoutItem;

export default HexLayout;
