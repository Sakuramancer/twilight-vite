let colorCommands = null;

export const setColorCommands = (commands) => {
  colorCommands = commands;
};

export const getColorCommands = () => {
  if (!colorCommands) {
    throw new Error("colorCommands not initialized");
  }
  return colorCommands;
};
