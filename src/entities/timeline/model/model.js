import { nanoid } from "nanoid";
import { createDefaults } from "./defaults";

export const add = (timeline, label) => {
  return [...timeline, { id: nanoid(), label, date: Date.now() }];
};

export const remove = (timeline, markId) => {
  return timeline.filter(({ id }) => id !== markId);
};

export const updateLabel = (timeline, markId, label) => {
  return timeline.map((mark) =>
    mark.id === markId ? { ...mark, label } : mark,
  );
};

export const reset = (_) => createDefaults();
