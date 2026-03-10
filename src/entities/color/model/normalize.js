import { PLAYER_COUNT } from "core/config";
import { createDefaultColor } from "./defaults";
import { validateColor } from "./validate";

const normalizeColor = (value) => {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value) ||
    typeof value.colorId !== "string" ||
    !validateColor(value.colorId)
  ) {
    return createDefaultColor();
  }
  return { colorId: value.colorId };
};

export const normalizeColors = (persisted) => {
  const safe = Array.isArray(persisted) ? persisted : [];
  return Array.from({ length: PLAYER_COUNT }, (_, i) =>
    normalizeColor(safe[i]),
  );
};
