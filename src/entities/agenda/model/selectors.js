import { createCachedFactorySelector, createMemoSelector } from "shared/lib";
import { agendasMeta } from "./data";
import { normalizeAgenda } from "./normalize";
import { sortMetaByTitle, sortForGameplay } from "./sort";

const colorLineScore = (agenda, playerIndex) =>
  agenda.meta.pointType === "colorLine" &&
  agenda.state.votes[playerIndex] > 0 &&
  agenda.state.voting > -1
    ? 2 * agenda.state.voting - 1
    : 0;

const electedScore = (agenda, playerIndex) =>
  agenda.meta.pointType === "elected" &&
  !agenda.state.purged &&
  agenda.state.pointVote > -1 &&
  agenda.state.voting === playerIndex
    ? 1
    : 0;

const separateScore = (agenda, playerIndex) =>
  agenda.meta.pointType === "separate" &&
  agenda.state.voting > -1 &&
  agenda.state.pointVote === playerIndex
    ? 1
    : 0;

const getScore = (agenda, playerIndex) =>
  colorLineScore(agenda, playerIndex) +
  electedScore(agenda, playerIndex) +
  separateScore(agenda, playerIndex);

const allSortedIdsWithFilters = createCachedFactorySelector((filters) =>
  Object.values(agendasMeta)
    .filter((card) => filters[card.type] && filters[card.expansion])
    .sort(sortMetaByTitle)
    .map((agenda) => agenda.id),
);

const makePointsForPlayer = createCachedFactorySelector((playerIndex) =>
  createMemoSelector([(s) => s.agendas], (agendas) =>
    Object.entries(agendas)
      .map(([id, state]) => ({
        id,
        meta: agendasMeta[id],
        state,
      }))
      .reduce(
        (accumulator, agenda) => accumulator + getScore(agenda, playerIndex),
        0,
      ),
  ),
);

const selectIdsForGameplay = createMemoSelector([(s) => s.agendas], (agendas) =>
  Object.entries(agendas)
    .map(([id, state]) => ({
      id,
      meta: agendasMeta[id],
      state,
    }))
    .sort(sortForGameplay)
    .map(({ id }) => id),
);

const selectIdsInactive = createMemoSelector([(s) => s.agendas], (agendas) =>
  Object.entries(agendasMeta)
    .filter(([id, _]) => !(id in agendas))
    .map(([_, agendaMeta]) => agendaMeta)
    .sort(sortMetaByTitle)
    .map(({ id }) => id),
);

const makeAgenda = createCachedFactorySelector((agendaId) =>
  createMemoSelector([(s) => s.agendas[agendaId]], (agenda) => {
    const state = normalizeAgenda(agenda);
    const meta = agendasMeta[agendaId];
    if (!meta) return { agendaId, state };

    const isBinaryVote = meta.voteType === "binary";
    const isPlayerVote = meta.voteType === "player";

    const isColorLinePoint = meta.pointType === "colorLine";
    const isSeparatePoint = meta.pointType === "separate";
    const isElectedPoint = meta.pointType === "elected";

    const voted = state.voting > -1;
    const binaryVoted = voted && isBinaryVote;
    const playerVoted = voted && isPlayerVote;
    const needToBeVoted = (isBinaryVote || isPlayerVote) && !voted;

    const derived = {
      isBinaryVote,
      isPlayerVote,
      isColorLinePoint,
      isSeparatePoint,
      isElectedPoint,
      voted,
      binaryVoted,
      playerVoted,
      needToBeVoted
    };

    return {
      agendaId,
      meta,
      state,
      derived,
    };
  }),
);

export const agendaSelectors = {
  allSortedIdsWithFilters,
  selectIdsForGameplay,
  selectIdsInactive,
  makeAgenda,
  makePointsForPlayer,
};
