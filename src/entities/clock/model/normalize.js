import { createDefaultClock } from "./defaults";

export const normalizeClock = (persisted) => {
  if (!persisted || typeof persisted !== "object" || Array.isArray(persisted)) {
    return createDefaultClock();
  }
  return {
    ...createDefaultClock(),
    ...persisted,
  };
};

export const normalizeClocks = (persisted) => {
  const safe = Array.isArray(persisted) ? persisted : [];
  return safe.map((item) => normalizeClock(item));
};
