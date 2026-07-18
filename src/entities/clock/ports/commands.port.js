let clockCommands = null;

export const setClockCommands = (commands) => {
  clockCommands = commands;
};

export const getClockCommands = () => {
  if (!clockCommands) {
    throw new Error("clockCommands not initialized");
  }
  return clockCommands;
};
