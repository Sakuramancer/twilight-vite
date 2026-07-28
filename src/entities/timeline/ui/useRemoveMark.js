import { useTimer } from "shared/lib";
import { getTimelineCommands } from "../ports";

export const useRemoveMark = (id) => {
  const commands = getTimelineCommands();

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
    commands.removeMark(id);
  };

  return { redpainted, handleClick };
};
