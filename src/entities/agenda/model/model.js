import { createDefaultAgenda, createDefaultAgendas } from "./defaults";
import { validateAgenda } from "./validate";

export const activate = (agendas, agendaId) => {
  if (!validateAgenda(agendaId)) {
    throw new Error("Incorrect agenda id");
  }
  const agenda = agendas[agendaId] ?? createDefaultAgenda();
  return {
    ...agendas,
    [agendaId]: { ...agenda, active: true },
  };
};

export const togglePurged = (agendas, agendaId) => {
  if (!validateAgenda(agendaId)) {
    throw new Error("Incorrect agenda id");
  }
  if (!(agendaId in agendas)) return agendas;
  const agenda = agendas[agendaId];
  return { ...agendas, [agendaId]: { ...agenda, purged: !agenda.purged } };
};

export const resetOne = (agendas, agendaId) => {
  if (!validateAgenda(agendaId)) {
    throw new Error("Incorrect agenda id");
  }
  const { [agendaId]: _, ...rest } = agendas;
  return rest;
};

export const resetAll = (_) => createDefaultAgendas();
