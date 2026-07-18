import { createDefaults } from "./defaults";

export const add = (clocks, label) => {
  return [...clocks, { label, date: Date.now() }];
};

export const remove = (clocks, clockIndex) => {
  return clocks.filter((_, index) => index !== clockIndex);
};

export const updateLabel = (clocks, clockIndex, label) => {
  return clocks.map((clock, index) =>
    index === clockIndex ? { ...clock, label } : clock,
  );
};

export const reset = (_) => createDefaults();
