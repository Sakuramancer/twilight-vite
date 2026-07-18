import classes from "./TimelineMark.module.css";

const defaultMark = { date: 0 };
const addLeadingZeros = (value) => ("00" + value).slice(-2);

const formatTime = (timeArray) =>
  timeArray.map((value) => addLeadingZeros(value)).join(":");

const TimelineMark = ({ index, mark, markBefore, showOffset }) => {
  const { date } = mark;
  const dateObj = new Date(date);
  const dateStr = formatTime([dateObj.getHours(), dateObj.getMinutes()]);

  const { date: dateBefore } = markBefore ?? defaultMark;
  const offset = date - dateBefore;
  const totalSeconds = Math.floor(offset / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const offsetStr = `+${formatTime([hours, minutes])}`;

  const showTimestamp = index === 0 || !showOffset;

  return (
    <div className={classes.main}>
      <div className={classes.label}>{`Метка ${index + 1}`}</div>
      {showTimestamp && <div className={classes.timestamp}>{dateStr}</div>}
      {!showTimestamp && <div className={classes.offset}>{offsetStr}</div>}
    </div>
  );
};

export { TimelineMark };
