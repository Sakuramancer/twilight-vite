import { nanoid } from "nanoid";
import { createDefaults } from "./defaults";

export const add = (clocks, label) => {
  return [...clocks, { id: nanoid(), label, date: Date.now() }];
};

export const remove = (clocks, clockId) => {
  return clocks.filter(({ id }) => id !== clockId);
};

export const updateLabel = (clocks, clockId, label) => {
  return clocks.map((clock) =>
    clock.id === clockId ? { ...clock, label } : clock,
  );
};

export const reset = (_) => createDefaults();
