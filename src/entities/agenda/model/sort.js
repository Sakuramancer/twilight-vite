const typeRank = { law: 0, directive: 1 };

export const sortForGameplay = (first, second) =>
  (typeRank[first.meta.type] - typeRank[second.meta.type]) * 100 +
  (first.state.purged - second.state.purged) * 10 +
  (first.meta.title.value > second.meta.title.value) -
  (first.meta.title.value < second.meta.title.value);

export const sortMetaByTitle = (first, second) =>
  (typeRank[first.type] - typeRank[second.type]) * 10 +
  (first.title.value > second.title.value) -
  (first.title.value < second.title.value);
