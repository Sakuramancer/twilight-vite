const stageRank = { stage1: 0, stage2: 1, secret: 2 };

export const sortByRankAndTitle = (first, second) =>
  (stageRank[first.stage] - stageRank[second.stage]) * 10 +
  (first.title.value > second.title.value) -
  (first.title.value < second.title.value);
