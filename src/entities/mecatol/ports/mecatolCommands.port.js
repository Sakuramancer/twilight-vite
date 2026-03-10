let mecatolCommands = null;

export const setMecatolCommands = (commands) => {
  mecatolCommands = commands;
};

export const getMecatolCommands = () => {
  if (!mecatolCommands) {
    throw new Error("mecatolCommands not initialized");
  }
  return mecatolCommands;
};
