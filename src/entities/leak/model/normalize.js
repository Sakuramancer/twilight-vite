import { PLAYER_COUNT } from "shared/config";
import { createDefaultLeak } from "./defaults";

export const normalizePoints = (points) => {
  const safe = Array.isArray(points) ? points : [];
  return Array.from({ length: PLAYER_COUNT }, (_, i) => Boolean(safe[i]));
};

export const normalizeLeak = (persisted) => {
  if (!persisted || typeof persisted !== "object" || Array.isArray(persisted)) {
    return createDefaultLeak();
  }
  return {
    ...createDefaultLeak(),
    ...persisted,
    points: normalizePoints(persisted.points),
  };
};
