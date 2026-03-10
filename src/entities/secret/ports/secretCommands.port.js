let secretCommands = null;

export const setSecretCommands = (commands) => {
  secretCommands = commands;
};

export const getSecretCommands = () => {
  if (!secretCommands) {
    throw new Error("secretCommands not initialized");
  }
  return secretCommands;
};
