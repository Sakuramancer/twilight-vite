let leakCommands = null;

export const setLeakCommands = (commands) => {
  leakCommands = commands;
};

export const getLeakCommands = () => {
  if (!leakCommands) {
    throw new Error("leakCommands not initialized");
  }
  return leakCommands;
};
