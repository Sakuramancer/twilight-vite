import { getAgendaCommands } from "entities/agenda";
import { getExtraCommands } from "entities/extra";
import { getMecatolCommands } from "entities/mecatol";
import { getObjectiveCommands } from "entities/objective";
import { getRelicCommands } from "entities/relic";
import { getSecretCommands } from "entities/secret";
import { getStyxCommands } from "entities/styx";
import { getSupportCommands } from "entities/support";
import { getTimelineCommands } from "entities/timeline";

export const resetGameState = () => {
  getAgendaCommands().resetAgendas();
  getExtraCommands().resetExtra();
  getMecatolCommands().resetMecatol();
  getObjectiveCommands().resetObjectives();
  getRelicCommands().resetRelics();
  getSecretCommands().resetSecrets();
  getStyxCommands().resetStyx();
  getSupportCommands().resetSupports();
  getTimelineCommands().resetTimeline();
};
