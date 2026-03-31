import { createAgendaCommands } from "entities/agenda/model";
import { setAgendaCommands } from "entities/agenda/ports";
import { createColorCommands } from "entities/color/model";
import { setColorCommands } from "entities/color/ports";
import { createExtraCommands } from "entities/extra/model";
import { setExtraCommands } from "entities/extra/ports";
import { createFactionCommands } from "entities/faction/model";
import { setFactionCommands } from "entities/faction/ports";
import { createGainCommands } from "entities/gain/model";
import { setGainCommands } from "entities/gain/ports";
import { createMecatolCommands } from "entities/mecatol/model";
import { setMecatolCommands } from "entities/mecatol/ports";
import { createObjectiveCommands } from "entities/objective/model";
import { setObjectiveCommands } from "entities/objective/ports";
import { createRelicCommands } from "entities/relic/model";
import { setRelicCommands } from "entities/relic/ports";
import { createSecretCommands } from "entities/secret/model";
import { setSecretCommands } from "entities/secret/ports";
import { createSupportCommands } from "entities/support/model";
import { setSupportCommands } from "entities/support/ports";
import { rootStore } from "./store/rootStore";

export const bootstrap = () => {
  const agendaCommands = createAgendaCommands(rootStore);
  setAgendaCommands(agendaCommands);

  const colorCommands = createColorCommands(rootStore);
  setColorCommands(colorCommands);

  const extraCommands = createExtraCommands(rootStore);
  setExtraCommands(extraCommands);

  const factionCommands = createFactionCommands(rootStore);
  setFactionCommands(factionCommands);

  const gainCommands = createGainCommands(rootStore);
  setGainCommands(gainCommands);

  const mecatolCommands = createMecatolCommands(rootStore);
  setMecatolCommands(mecatolCommands);

  const objectiveCommands = createObjectiveCommands(rootStore);
  setObjectiveCommands(objectiveCommands);

  const relicCommands = createRelicCommands(rootStore);
  setRelicCommands(relicCommands);

  const secretCommands = createSecretCommands(rootStore);
  setSecretCommands(secretCommands);

  const supportCommands = createSupportCommands(rootStore);
  setSupportCommands(supportCommands);
};
