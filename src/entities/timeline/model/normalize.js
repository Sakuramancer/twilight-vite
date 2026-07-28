import { createDefaultMark, createDefaults } from "./defaults";

export const normalizeMark = (persisted) => {
  if (!persisted || typeof persisted !== "object" || Array.isArray(persisted)) {
    return createDefaultMark();
  }
  return {
    ...createDefaultMark(),
    ...persisted,
  };
};

export const normalizeTimeline = (persisted) => {
  const safe = Array.isArray(persisted) ? persisted : createDefaults();
  return safe.map((item) => normalizeMark(item));
};
