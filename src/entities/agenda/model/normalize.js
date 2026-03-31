import { createDefaultAgenda, createDefaultAgendas } from "./defaults";

export const normalizeAgenda = (persisted) => {
  if (!persisted || typeof persisted !== "object" || Array.isArray(persisted)) {
    return createDefaultAgenda();
  }
  return {
    ...createDefaultAgenda(),
    ...persisted,
  };
};

export const normalizeAgendas = (persisted) => {
  if (!persisted || typeof persisted !== "object" || Array.isArray(persisted)) {
    return createDefaultAgendas();
  }
  return Object.fromEntries(
    Object.entries(persisted).map(([id, agenda]) => [id, normalizeAgenda(agenda)]),
  );
};
