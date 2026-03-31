const typeRank = { law: 0, directive: 1 };

export const sortForGameplay = (first, second) =>
  (typeRank[first.static.type] - typeRank[second.static.type]) * 100 +
  (first.state.purged - second.state.purged) * 10 +
  (first.static.title.value > second.static.title.value) -
  (first.static.title.value < second.static.title.value);

export const sortStaticByTitle = (first, second) =>
  (typeRank[first.type] - typeRank[second.type]) * 10 +
  (first.title.value > second.title.value) -
  (first.title.value < second.title.value);
