import { getAgendaCommands } from "entities/agenda";
import { getExtraCommands } from "entities/extra";
import { getGainCommands } from "entities/gain";
import { getMecatolCommands } from "entities/mecatol";
import { getObjectiveCommands } from "entities/objective";
import { getRelicCommands } from "entities/relic";
import { getSecretCommands } from "entities/secret";
import { getSupportCommands } from "entities/support";

export const resetGameState = () => {
  getAgendaCommands().resetAgendas();
  getExtraCommands().resetExtra();
  getGainCommands().resetGains();
  getMecatolCommands().resetMecatol();
  getObjectiveCommands().resetObjectives();
  getRelicCommands().resetRelics();
  getSecretCommands().resetSecrets();
  getSupportCommands().resetSupports();
};
