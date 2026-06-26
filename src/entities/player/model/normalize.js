import { PLAYER_COUNT } from "shared/config";
import { createDefaultPlayer } from "./defaults";

export const normalizePlayer = (persisted) => {
  if (!persisted || typeof persisted !== "object" || Array.isArray(persisted)) {
    return createDefaultPlayer();
  }
  return {
    ...createDefaultPlayer(),
    ...persisted,
  };
};

export const normalizePlayers = (persisted) => {
  const safe = Array.isArray(persisted) ? persisted : [];
  return Array.from({ length: PLAYER_COUNT }, (_, i) =>
    normalizePlayer(safe[i]),
  );
};
