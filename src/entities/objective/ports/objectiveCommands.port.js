let objectiveCommands = null;

export const setObjectiveCommands = (commands) => {
  objectiveCommands = commands;
};

export const getObjectiveCommands = () => {
  if (!objectiveCommands) {
    throw new Error("objectiveCommands not initialized");
  }
  return objectiveCommands;
};
