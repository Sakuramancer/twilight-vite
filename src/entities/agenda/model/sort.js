const typeRank = { law: 0, directive: 1 };

export const sortStaticByTitle = (first, second) =>
  (typeRank[first.type] - typeRank[second.type]) * 10 +
  (first.title.value > second.title.value) -
  (first.title.value < second.title.value);
