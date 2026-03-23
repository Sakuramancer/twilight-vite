import { agendasStatic } from "./data";

export const validateAgenda = (agendaId) =>
  Object.keys(agendasStatic).includes(agendaId);
