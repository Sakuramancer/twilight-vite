import { PLAYER_COUNT } from "core/config";

export const normalizeMecatol = (points) => {
  const safe = Array.isArray(points) ? points : [];
  return Array.from({ length: PLAYER_COUNT }, (_, i) => {
    const value = safe[i];
    return Number.isInteger(value) ? value : 0;
  });
};
