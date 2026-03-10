let agendaCommands = null;

export const setAgendaCommands = (commands) => {
  agendaCommands = commands;
};

export const getAgendaCommands = () => {
  if (!agendaCommands) {
    throw new Error("agendaCommands not initialized");
  }
  return agendaCommands;
};
