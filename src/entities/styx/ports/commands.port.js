let styxCommands = null;

export const setStyxCommands = (commands) => {
  styxCommands = commands;
};

export const getStyxCommands = () => {
  if (!styxCommands) {
    throw new Error("styxCommands not initialized");
  }
  return styxCommands;
};
