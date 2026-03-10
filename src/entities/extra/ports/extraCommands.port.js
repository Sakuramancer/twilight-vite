let extraCommands = null;

export const setExtraCommands = (commands) => {
  extraCommands = commands;
};

export const getExtraCommands = () => {
  if (!extraCommands) {
    throw new Error("extraCommands not initialized");
  }
  return extraCommands;
};
