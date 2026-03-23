import { validatePlayerIndex } from "core/player";
import { createDefaultGains, RESET_VALUE } from "./defaults";
import { gainsStatic } from "./data";

export const normalizeGain = (value) => {
  return Number.isInteger(value) && validatePlayerIndex(value)
    ? value
    : RESET_VALUE;
};

export const normalizeGains = (persisted) => {
  if (!persisted || typeof persisted !== "object" || Array.isArray(persisted)) {
    return createDefaultGains();
  }
  return Object.fromEntries(
    Object.keys(gainsStatic).map((id) => [id, normalizeGain(persisted[id])]),
  );
};
