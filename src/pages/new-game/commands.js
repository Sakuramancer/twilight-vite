import { getAgendaCommands } from "entities/agenda";
import { getClockCommands } from "entities/clock";
import { getExtraCommands } from "entities/extra";
import { getMecatolCommands } from "entities/mecatol";
import { getObjectiveCommands } from "entities/objective";
import { getRelicCommands } from "entities/relic";
import { getSecretCommands } from "entities/secret";
import { getStyxCommands } from "entities/styx";
import { getSupportCommands } from "entities/support";

export const resetGameState = () => {
  getAgendaCommands().resetAgendas();
  getClockCommands().resetClocks();
  getExtraCommands().resetExtra();
  getMecatolCommands().resetMecatol();
  getObjectiveCommands().resetObjectives();
  getRelicCommands().resetRelics();
  getSecretCommands().resetSecrets();
  getStyxCommands().resetStyx();
  getSupportCommands().resetSupports();
};
