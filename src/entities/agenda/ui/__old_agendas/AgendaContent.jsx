import classes from "./AgendaContent.module.css";

const AgendaContent = ({ className, card }) => {
  return (
    <div className={className}>
      <div className={classes.content}>
        <div className={classes.title}>{card.title.value}</div>
      </div>
    </div>
  );
};

export default AgendaContent;
