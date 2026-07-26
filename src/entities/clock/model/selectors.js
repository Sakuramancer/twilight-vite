import { createMemoSelector } from "shared/lib";
import { ROUND_MASK } from "./defaults";

const regex = new RegExp(`^${ROUND_MASK} (\\d+)$`);

const selectClocks = createMemoSelector([(s) => s.clocks], (clocks) => clocks);

const selectNewRound = createMemoSelector([(s) => s.clocks], (clocks) => {
  const match = clocks
    .map(({ label }) => label)
    .findLast((str) => regex.test(str))
    ?.match(regex);
  return match ? Number(match[1]) + 1 : 1;
});

export const clockSelectors = {
  selectClocks,
  selectNewRound,
};
