import { createDefaultRelic, createDefaultRelics } from "./defaults";

export const normalizeRelic = (persisted) => {
  if (!persisted || typeof persisted !== "object" || Array.isArray(persisted)) {
    return createDefaultRelic();
  }
  return {
    ...createDefaultRelic(),
    ...persisted,
  };
};

export const normalizeRelics = (persisted) => {
  if (!persisted || typeof persisted !== "object" || Array.isArray(persisted)) {
    return createDefaultRelics();
  }
  return Object.fromEntries(
    Object.entries(persisted).map(([id, relic]) => [id, normalizeRelic(relic)]),
  );
};
