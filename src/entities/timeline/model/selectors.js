import { createMemoSelector } from "shared/lib";
import { ROUND } from "./defaults";

const regex = new RegExp(`^${ROUND} (\\d+)$`);

const selectTimeline = createMemoSelector(
  [(s) => s.timeline],
  (timeline) => timeline,
);

const selectNewRound = createMemoSelector([(s) => s.timeline], (timeline) => {
  const match = timeline
    .map(({ label }) => label)
    .findLast((str) => regex.test(str))
    ?.match(regex);
  return match ? Number(match[1]) + 1 : 1;
});

export const timelineSelectors = {
  selectTimeline,
  selectNewRound,
};
