let playerCommands = null;

export const setPlayerCommands = (commands) => {
  playerCommands = commands;
};

export const getPlayerCommands = () => {
  if (!playerCommands) {
    throw new Error("playerCommands not initialized");
  }
  return playerCommands;
};
