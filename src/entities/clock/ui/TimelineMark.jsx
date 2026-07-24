import classNames from "classnames/bind";
import { MarkField } from "./MarkField";
import { formatOffset, formatTime } from "./formatTimeline";
import { useRemoveClock } from "./useRemoveClock";
import { useTimelineMarkLabel } from "./useTimelineMarkLabel";
import classes from "./TimelineMark.module.css";

const cx = classNames.bind(classes);

const TimelineMark = ({
  index,
  mark,
  markBefore,
  showOffset,
  focusTrigger,
  setFocusTrigger,
}) => {
  const { value, setValue } = useTimelineMarkLabel(index, mark.label);
  const { redpainted, handleClick } = useRemoveClock(index);

  const showTimestamp = index === 0 || !showOffset;
  const labelText = showTimestamp
    ? formatTime(mark.date)
    : formatOffset(mark.date - (markBefore?.date ?? 0));

  const mainClass = cx({
    main: true,
    "main-redpainted": redpainted,
  });

  const labelClass = cx({
    timestamp: showTimestamp,
    offset: !showTimestamp,
  });

  return (
    <div className={mainClass}>
      <MarkField
        aria-label={`Метка ${index + 1}`}
        value={value}
        onChange={setValue}
        focusTrigger={focusTrigger}
        setFocusTrigger={setFocusTrigger}
      />
      <div className={labelClass} onClick={handleClick}>
        {labelText}
      </div>
    </div>
  );
};

export { TimelineMark };
