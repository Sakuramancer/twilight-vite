let timelineCommands = null;

export const setTimelineCommands = (commands) => {
  timelineCommands = commands;
};

export const getTimelineCommands = () => {
  if (!timelineCommands) {
    throw new Error("timelineCommands not initialized");
  }
  return timelineCommands;
};
