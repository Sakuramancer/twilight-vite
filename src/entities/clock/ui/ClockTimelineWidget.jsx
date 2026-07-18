import classNames from "classnames/bind";
import { AddMarkButton } from "./AddMarkButton";
import { Clock } from "./Clock";
import { Timeline } from "./Timeline";
import classes from "./ClockTimelineWidget.module.css";
import { useState } from "react";

const cx = classNames.bind(classes);

const ClockTimelineWidget = ({ className }) => {
  const [showOffset, setShowOffset] = useState(false);

  const onClick = () => {
    setShowOffset((val) => !val);
  };

  const mainClass = cx({
    [className]: true,
    main: true,
  });

  return (
    <div className={mainClass}>
      <Clock onClick={onClick} />
      <Timeline showOffset={showOffset} />
      <AddMarkButton />
    </div>
  );
};

export { ClockTimelineWidget };
