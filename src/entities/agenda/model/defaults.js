import { PLAYER_COUNT } from "shared/config";

export const createDefaultVotes = () => Array(PLAYER_COUNT).fill(false);

export const createDefaultAgenda = () => ({
  active: true,
  purged: false,
  voting: -1,
  votes: createDefaultVotes(),
  pointVote: -1
});

export const createDefaultAgendas = () => ({});
