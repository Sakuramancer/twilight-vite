let supportCommands = null;

export const setSupportCommands = (commands) => {
  supportCommands = commands;
};

export const getSupportCommands = () => {
  if (!supportCommands) {
    throw new Error("supportCommands not initialized");
  }
  return supportCommands;
};
