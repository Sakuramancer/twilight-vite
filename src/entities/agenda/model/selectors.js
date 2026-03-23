import { createCachedFactorySelector, createMemoSelector } from "core/utils";
import { agendasStatic } from "./data";
import { normalizeAgenda } from "./normalize";
import { sortStaticByTitle } from "./sort";

const allSortedIdsWithFilters = createCachedFactorySelector((filters) =>
  Object.values(agendasStatic)
    .filter((card) => filters[card.type] && filters[card.expansion])
    .sort(sortStaticByTitle)
    .map((agenda) => agenda.id),
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
  makeAgenda,
};
