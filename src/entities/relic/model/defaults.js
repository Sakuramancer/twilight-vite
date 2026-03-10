export const RESET_VALUE = -1;

export const createDefaultRelic = () => ({
  playerIndex: RESET_VALUE,
  purged: false,
  pointTaken: false,
});

export const createDefaultRelics = () => ({});

export const isDefault = ({ playerIndex, purged, pointTaken }) =>
  playerIndex === RESET_VALUE && purged === false && pointTaken === false;
