import factions from "../data/factions.json";

export const factionsStatic = factions;

const labels = {
  pok: "A",
  codex: "III",
  te: "TE",
};

export const getExpansionLabel = (expansion) => labels[expansion] ?? "";
