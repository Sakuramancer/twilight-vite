import agendas from "../data/agendas.json";

export const agendasStatic = agendas;

const labels = {
  pok: "A",
};

export const getExpansionLabel = (expansion) => labels[expansion] ?? "";
