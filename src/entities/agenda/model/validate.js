import { agendasMeta } from "./data";

export const validateAgenda = (agendaId) =>
  Object.keys(agendasMeta).includes(agendaId);
