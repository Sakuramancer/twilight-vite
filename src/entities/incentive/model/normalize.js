import { PLAYER_COUNT } from "shared/config";
import { createDefaultIncentive } from "./defaults";

export const normalizePoints = (points) => {
  const safe = Array.isArray(points) ? points : [];
  return Array.from({ length: PLAYER_COUNT }, (_, i) => Boolean(safe[i]));
};

export const normalizeIncentive = (persisted) => {
  if (!persisted || typeof persisted !== "object" || Array.isArray(persisted)) {
    return createDefaultIncentive();
  }
  return {
    ...createDefaultIncentive(),
    ...persisted,
    points: normalizePoints(persisted.points),
  };
};
