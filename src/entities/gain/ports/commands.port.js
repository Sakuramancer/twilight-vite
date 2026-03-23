let gainCommands = null;

export const setGainCommands = (commands) => {
  gainCommands = commands;
};

export const getGainCommands = () => {
  if (!gainCommands) {
    throw new Error("gainCommands not initialized");
  }
  return gainCommands;
};
