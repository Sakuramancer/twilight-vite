import relics from "../data/relics.json";

export const relicsStatic = relics;

const labels = {
  pok: "A",
  codex2: "II",
  codex4: "IV",
  te: "TE",
};

export const getExpansionLabel = (expansion) => labels[expansion] ?? "";
