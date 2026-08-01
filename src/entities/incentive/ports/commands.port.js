let incentiveCommands = null;

export const setIncentiveCommands = (commands) => {
  incentiveCommands = commands;
};

export const getIncentiveCommands = () => {
  if (!incentiveCommands) {
    throw new Error("incentiveCommands not initialized");
  }
  return incentiveCommands;
};
