import agendas from "../data/agendas.json";

export const agendasStatic = agendas;

const labels = {
  pok: "A",
};

export const getExpansionLabel = (expansion) => labels[expansion] ?? "";

export const agendasSearchIndex = Object.fromEntries(
  Object.entries(agendas).map(([id, agenda]) => [
    id,
    {
      id,
      searchText: [
        agenda.title.src,
        agenda.title.value,
        agenda.description.src.join(" "),
        agenda.description.value.join(" "),
      ]
        .filter((v) => v != null)
        .join(" ")
        .toLowerCase(),
    },
  ]),
);
