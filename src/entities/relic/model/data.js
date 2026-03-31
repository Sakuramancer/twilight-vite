import relics from "../data/relics.json";

export const relicsStatic = relics;

const labels = {
  pok: "A",
  codex2: "II",
  codex4: "IV",
  te: "TE",
};

export const getExpansionLabel = (expansion) => labels[expansion] ?? "";

export const relicsSearchIndex = Object.fromEntries(
  Object.entries(relics).map(([id, relic]) => [
    id,
    {
      id,
      searchText: [
        relic.title.src,
        relic.title.value,
        relic.description.src.join(" "),
        relic.description.value.join(" "),
      ]
        .filter((v) => v != null)
        .join(" ")
        .toLowerCase(),
    },
  ]),
);
