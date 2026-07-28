import { validatePlayerIndex } from "shared/config";
import { createDefaultStyx, RESET_VALUE } from "./defaults";

export const normalizeOwner = (value) => {
  return Number.isInteger(value) && validatePlayerIndex(value)
    ? value
    : RESET_VALUE;
};

export const normalizeStyx = (persisted) => {
  if (!persisted || typeof persisted !== "object" || Array.isArray(persisted)) {
    return createDefaultStyx();
  }
  return {
    ...createDefaultStyx(),
    ...persisted,
    owner: normalizeOwner(persisted.owner),
  };
};
