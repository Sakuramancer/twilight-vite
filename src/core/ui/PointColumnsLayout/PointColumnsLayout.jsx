import classes from "./PointColumnsLayout.module.css";

export const PointColumnsLayout = ({ children }) => {
  return <div className={classes.layout}>{children}</div>;
};

export const PointColumn = ({ title, content, actions }) => {
  return (
    <div className={classes.column}>
      <div className={classes.header}>
        <div className={classes.title}>{title}</div>
        <div className={classes.actions}>{actions}</div>
      </div>
      <div className={classes.content}>{content}</div>
    </div>
  );
};
