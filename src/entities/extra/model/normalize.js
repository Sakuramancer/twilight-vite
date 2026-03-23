import { PLAYER_COUNT } from "core/player";

export const normalizeExtra = (points) => {
  const safe = Array.isArray(points) ? points : [];
  return Array.from({ length: PLAYER_COUNT }, (_, i) => {
    const value = safe[i];
    return Number.isInteger(value) ? value : 0;
  });
};
