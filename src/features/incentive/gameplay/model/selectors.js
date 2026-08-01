import { createMemoSelector } from "shared/lib";
import { selectIsIncentiveAvailable } from "entities/agenda/@x/incentive";

export const selectIsIncentiveVisible = createMemoSelector(
  [selectIsIncentiveAvailable, (s) => s.incentive],
  (available, incentive) => available || incentive.cardId,
);
