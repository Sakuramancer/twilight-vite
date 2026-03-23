import { getExtraCommands } from "entities/extra/ports";
import { getGainCommands } from "entities/gain/ports";
import { getMecatolCommands } from "entities/mecatol/ports";
import { getObjectiveCommands } from "entities/objective/ports";
import { getRelicCommands } from "entities/relic/ports";
import { getSecretCommands } from "entities/secret/ports";
import { getSupportCommands } from "entities/support/ports";

const resetGameState = () => {
  //agendaCommands.resetAgendas();
  getExtraCommands().resetExtra();
  getGainCommands().resetGains();
  getMecatolCommands().resetMecatol();
  getObjectiveCommands().resetObjectives();
  getRelicCommands().resetRelics();
  getSecretCommands().resetSecrets();
  getSupportCommands().resetSupports();
};

export const settingsCommands = {
  resetGameState,
};
