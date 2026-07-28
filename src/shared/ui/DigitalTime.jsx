import { useTime } from "react-timer-hook";

const DigitalTime = ({ className }) => {
  const { minutes, hours } = useTime();

  return (
    <div className={className}>
      {[("00" + hours).slice(-2), ("00" + minutes).slice(-2)].join(":")}
    </div>
  );
};

export { DigitalTime };
