import { createCachedFactorySelector } from "shared/lib";
import { goalsMeta } from "./data";
import { sortByRankAndTitle } from "./sort";

const allSortedIdsWithFilters = createCachedFactorySelector((filters) =>
  Object.values(goalsMeta)
    .filter(
      (card) =>
        filters[card.phase] && filters[card.stage] && filters[card.expansion],
    )
    .sort(sortByRankAndTitle)
    .map((goal) => goal.id),
);

export const goalSelectors = {
  allSortedIdsWithFilters,
};
