import { validatePlayerIndex } from "shared/config";
import { createDefaultStyx } from "./defaults";

export const setOwner = (styx, playerIndex) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  return { ...styx, owner: playerIndex };
};

export const activate = (styx) => {
  return { ...styx, isActive: true };
};

export const reset = () => createDefaultStyx();
