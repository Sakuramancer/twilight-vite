let factionCommands = null;

export const setFactionCommands = (commands) => {
  factionCommands = commands;
};

export const getFactionCommands = () => {
  if (!factionCommands) {
    throw new Error("factionCommands not initialized");
  }
  return factionCommands;
};
