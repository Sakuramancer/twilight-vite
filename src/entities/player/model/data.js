import factions from "../data/factions.json";

export const factionsMeta = factions;

const labels = {
  pok: "A",
  codex: "III",
  te: "TE",
};

export const getExpansionLabel = (expansion) => labels[expansion] ?? "";
