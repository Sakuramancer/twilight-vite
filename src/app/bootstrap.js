import { createAgendaCommands, setAgendaCommands } from "entities/agenda";
import { createExtraCommands, setExtraCommands } from "entities/extra";
import { createGainCommands, setGainCommands } from "entities/gain";
import { createMecatolCommands, setMecatolCommands } from "entities/mecatol";
import {
  createObjectiveCommands,
  setObjectiveCommands,
} from "entities/objective";
import { createPlayerCommands, setPlayerCommands } from "entities/player";
import { createRelicCommands, setRelicCommands } from "entities/relic";
import { createSecretCommands, setSecretCommands } from "entities/secret";
import { createSupportCommands, setSupportCommands } from "entities/support";
import { rootStore } from "./store";

export const bootstrap = () => {
  const agendaCommands = createAgendaCommands(rootStore);
  setAgendaCommands(agendaCommands);

  const extraCommands = createExtraCommands(rootStore);
  setExtraCommands(extraCommands);

  const gainCommands = createGainCommands(rootStore);
  setGainCommands(gainCommands);

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

  const supportCommands = createSupportCommands(rootStore);
  setSupportCommands(supportCommands);
};
