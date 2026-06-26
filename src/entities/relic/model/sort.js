// roll playerIndex -1 to the end at sorting
const roll = (playerIndex) => (7 + playerIndex) % 7;

export const sortForGameplay = (first, second) =>
  (second.meta.havePoint - first.meta.havePoint) * 1000 +
  (first.state.purged - second.state.purged) * 100 +
  (roll(first.state.playerIndex) - roll(second.state.playerIndex)) * 10 +
  (first.meta.title.value > second.meta.title.value) -
  (first.meta.title.value < second.meta.title.value);

export const sortMetaByTitle = (first, second) =>
  (first.title.value > second.title.value) -
  (first.title.value < second.title.value);
