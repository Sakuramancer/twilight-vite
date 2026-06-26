import { validatePlayerIndex } from "shared/config";
import { gainsMeta } from "./data";
import { createDefaultGains, RESET_VALUE } from "./defaults";

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
    Object.keys(gainsMeta).map((id) => [id, normalizeGain(persisted[id])]),
  );
};
