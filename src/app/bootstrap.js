import { createAgendaCommands, setAgendaCommands } from "entities/agenda";
import { createExtraCommands, setExtraCommands } from "entities/extra";
import { createMecatolCommands, setMecatolCommands } from "entities/mecatol";
import {
  createObjectiveCommands,
  setObjectiveCommands,
} from "entities/objective";
import { createPlayerCommands, setPlayerCommands } from "entities/player";
import { createRelicCommands, setRelicCommands } from "entities/relic";
import { createSecretCommands, setSecretCommands } from "entities/secret";
import { createStyxCommands, setStyxCommands } from "entities/styx";
import { createSupportCommands, setSupportCommands } from "entities/support";
import { createTimelineCommands, setTimelineCommands } from "entities/timeline";
import { rootStore } from "./store";

export const bootstrap = () => {
  const agendaCommands = createAgendaCommands(rootStore);
  setAgendaCommands(agendaCommands);

  const extraCommands = createExtraCommands(rootStore);
  setExtraCommands(extraCommands);

  const mecatolCommands = createMecatolCommands(rootStore);
  setMecatolCommands(mecatolCommands);

  const objectiveCommands = createObjectiveCommands(rootStore);
  setObjectiveCommands(objectiveCommands);

  const playerCommands = createPlayerCommands(rootStore);
  setPlayerCommands(playerCommands);

  const relicCommands = createRelicCommands(rootStore);
  setRelicCommands(relicCommands);

  const secretCommands = createSecretCommands(rootStore);
  setSecretCommands(secretCommands);

  const styxCommands = createStyxCommands(rootStore);
  setStyxCommands(styxCommands);

  const supportCommands = createSupportCommands(rootStore);
  setSupportCommands(supportCommands);

  const timelineCommands = createTimelineCommands(rootStore);
  setTimelineCommands(timelineCommands);
};
