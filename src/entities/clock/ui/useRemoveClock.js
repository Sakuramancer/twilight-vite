import { useTimer } from "shared/lib";
import { getClockCommands } from "../ports";

export const useRemoveClock = (id) => {
  const commands = getClockCommands();

  const {
    isActive: redpainted,
    startTimer: showRedpainted,
    stopTimer: hideRedpainted,
  } = useTimer(1000);

  const handleClick = () => {
    if (!redpainted) {
      showRedpainted();
      return;
    }
    hideRedpainted();
    commands.removeClock(id);
  };

  return { redpainted, handleClick };
};
