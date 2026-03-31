import { createCachedFactorySelector, createMemoSelector } from "core/utils";
import { agendasStatic } from "./data";
import { normalizeAgenda } from "./normalize";
import { sortStaticByTitle, sortForGameplay } from "./sort";

const allSortedIdsWithFilters = createCachedFactorySelector((filters) =>
  Object.values(agendasStatic)
    .filter((card) => filters[card.type] && filters[card.expansion])
    .sort(sortStaticByTitle)
    .map((agenda) => agenda.id),
);

const selectIdsForGameplay = createMemoSelector([(s) => s.agendas], (agendas) =>
  Object.entries(agendas)
    .map(([id, state]) => ({
      id,
      static: agendasStatic[id],
      state,
    }))
    .sort(sortForGameplay)
    .map(({ id }) => id),
);

const selectIdsInactive = createMemoSelector([(s) => s.agendas], (agendas) =>
  Object.entries(agendasStatic)
    .filter(([id, _]) => !(id in agendas))
    .map(([_, agendaStatic]) => agendaStatic)
    .sort(sortStaticByTitle)
    .map(({ id }) => id),
);

const makeAgenda = createCachedFactorySelector((agendaId) =>
  createMemoSelector([(s) => s.agendas[agendaId]], (agenda) => {
    const normalizedAgenda = normalizeAgenda(agenda);
    return {
      agendaId,
      static: agendasStatic[agendaId],
      state: normalizedAgenda,
    };
  }),
);

export const agendaSelectors = {
  allSortedIdsWithFilters,
  selectIdsForGameplay,
  selectIdsInactive,
  makeAgenda,
};
