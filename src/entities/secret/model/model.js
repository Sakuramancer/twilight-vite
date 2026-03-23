import { validatePlayerIndex } from "core/player";
import {
  createDefaultPlayerSecrets,
  createDefaultSecret,
  createDefaultSecrets,
} from "./defaults";
import { validateSecretIndex } from "./validate";

export const preselectForPlayer = (secrets, playerIndex, secretIndex) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  if (!validateSecretIndex(secretIndex)) {
    throw new Error("Incorrect secret index");
  }
  return secrets.map((player, index) =>
    index === playerIndex
      ? player.map((secret, sIndex) =>
          sIndex === secretIndex ? { ...secret, taken: true } : secret,
        )
      : player,
  );
};

export const setForPlayer = (secrets, playerIndex, secretIndex, cardId) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  if (!validateSecretIndex(secretIndex)) {
    throw new Error("Incorrect secret index");
  }
  return secrets.map((player, index) =>
    index === playerIndex
      ? player.map((secret, sIndex) =>
          sIndex === secretIndex ? { ...secret, cardId } : secret,
        )
      : player,
  );
};

export const resetOne = (secrets, playerIndex, secretIndex) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  if (!validateSecretIndex(secretIndex)) {
    throw new Error("Incorrect secret index");
  }
  return secrets.map((player, index) =>
    index === playerIndex
      ? player.map((secret, sIndex) =>
          sIndex === secretIndex ? createDefaultSecret() : secret,
        )
      : player,
  );
};

export const resetAllForPlayer = (secrets, playerIndex) => {
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  return secrets.map((player, index) =>
    index === playerIndex ? createDefaultPlayerSecrets() : player,
  );
};

export const resetAll = (_) => createDefaultSecrets();
