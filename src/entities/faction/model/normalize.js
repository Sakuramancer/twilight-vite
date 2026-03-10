import { PLAYER_COUNT } from "core/config";
import { createDefaultFaction } from "./defaults";
import { validateFaction } from "./validate";

const normalizeFaction = (value) => {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value) ||
    typeof value.factionId !== "string" ||
    !validateFaction(value.factionId)
  ) {
    return createDefaultFaction();
  }
  return { factionId: value.factionId };
};

export const normalizeFactions = (persisted) => {
  const safe = Array.isArray(persisted) ? persisted : [];
  return Array.from({ length: PLAYER_COUNT }, (_, i) =>
    normalizeFaction(safe[i]),
  );
};
