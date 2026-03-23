import { PLAYER_COUNT } from "core/player";

export const SECRET_COUNT = 4;

export const createDefaultSecret = () => ({
  taken: false,
  cardId: undefined,
});

export const createDefaultPlayerSecrets = () =>
  Array.from({ length: SECRET_COUNT }, () => createDefaultSecret());

export const createDefaultSecrets = () =>
  Array.from({ length: PLAYER_COUNT }, () => createDefaultPlayerSecrets());
