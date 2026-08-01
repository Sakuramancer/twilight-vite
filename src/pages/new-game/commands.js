import { getAgendaCommands } from "entities/agenda";
import { getExtraCommands } from "entities/extra";
import { getIncentiveCommands } from "entities/incentive";
import { getLeakCommands } from "entities/leak";
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
  getIncentiveCommands().resetIncentive();
  getLeakCommands().resetLeak();
  getMecatolCommands().resetMecatol();
  getObjectiveCommands().resetObjectives();
  getRelicCommands().resetRelics();
  getSecretCommands().resetSecrets();
  getStyxCommands().resetStyx();
  getSupportCommands().resetSupports();
  getTimelineCommands().resetTimeline();
};
