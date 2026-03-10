let relicCommands = null;

export const setRelicCommands = (commands) => {
  relicCommands = commands;
};

export const getRelicCommands = () => {
  if (!relicCommands) {
    throw new Error("relicCommands not initialized");
  }
  return relicCommands;
};
