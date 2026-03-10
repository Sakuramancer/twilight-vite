// roll playerIndex -1 to the end at sorting
const roll = (playerIndex) => (7 + playerIndex) % 7;

export const sortForGameplay = (first, second) =>
  (second.static.havePoint - first.static.havePoint) * 1000 +
  (first.state.purged - second.state.purged) * 100 +
  (roll(first.state.playerIndex) - roll(second.state.playerIndex)) * 10 +
  (first.static.title.value > second.static.title.value) -
  (first.static.title.value < second.static.title.value);

export const sortStaticByTitle = (first, second) =>
  (first.title.value > second.title.value) -
  (first.title.value < second.title.value);
