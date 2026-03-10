const expansionWeights = { main: 0, te: 1 };

export const sortByExpansionAndName = (first, second) =>
  (expansionWeights[first.expansion] - expansionWeights[second.expansion]) *
    10 +
  (first.name.value > second.name.value) -
  (first.name.value < second.name.value);
