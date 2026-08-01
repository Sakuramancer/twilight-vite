import { createMemoSelector } from "shared/lib";
import { selectIsLeakAvailable } from "entities/agenda/@x/leak";

export const selectIsLeakVisible = createMemoSelector(
  [selectIsLeakAvailable, (s) => s.leak],
  (available, leak) => available || leak.cardId,
);
