import { PLAYER_COUNT } from "core/config";
import { createDefaultObjective, OBJECTIVE_COUNT } from "./defaults";

export const normalizePoints = (points) => {
  const safe = Array.isArray(points) ? points : [];
  return Array.from({ length: PLAYER_COUNT }, (_, i) => Boolean(safe[i]));
};

export const normalizeObjective = (persisted) => {
  if (!persisted || typeof persisted !== "object" || Array.isArray(persisted)) {
    return createDefaultObjective();
  }
  return {
    ...createDefaultObjective(),
    ...persisted,
    points: normalizePoints(persisted.points),
  };
};

export const normalizeObjectives = (persisted) => {
  const safe = Array.isArray(persisted) ? persisted : [];
  return Array.from({ length: OBJECTIVE_COUNT }, (_, i) =>
    normalizeObjective(safe[i]),
  );
};
