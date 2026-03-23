import { PLAYER_COUNT, validatePlayerIndex } from "core/player";
import { RESET_VALUE } from "./defaults";

export const normalizeSupports = (persisted) => {
  const safe = Array.isArray(persisted) ? persisted : [];
  return Array.from({ length: PLAYER_COUNT }, (_, i) => {
    const value = safe[i];
    return Number.isInteger(value) && validatePlayerIndex(value)
      ? value
      : RESET_VALUE;
  });
};
