import { createMemoSelector } from "shared/lib";

const selectClocks = createMemoSelector([(s) => s.clocks], (clocks) => clocks);

export const clockSelectors = {
  selectClocks,
};
