import { PLAYER_COUNT } from "core/player";
import { createDefaultSecret, SECRET_COUNT } from "./defaults";

export const normalizeSecret = (persisted) => {
  if (!persisted || typeof persisted !== "object" || Array.isArray(persisted)) {
    return createDefaultSecret();
  }
  return {
    ...createDefaultSecret(),
    ...persisted,
  };
};

export const normalizePlayerSecrets = (persisted) => {
  const safe = Array.isArray(persisted) ? persisted : [];
  return Array.from({ length: SECRET_COUNT }, (_, i) =>
    normalizeSecret(safe[i]),
  );
};

export const normalizeSecrets = (persisted) => {
  const safe = Array.isArray(persisted) ? persisted : [];
  return Array.from({ length: PLAYER_COUNT }, (_, i) =>
    normalizePlayerSecrets(safe[i]),
  );
};
