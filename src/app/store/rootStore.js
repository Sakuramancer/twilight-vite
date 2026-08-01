import { createStore, persistBySlices } from "shared/store";
import { agendaSlice } from "entities/agenda";
import { extraSlice } from "entities/extra";
import { incentiveSlice } from "entities/incentive";
import { leakSlice } from "entities/leak";
import { mecatolSlice } from "entities/mecatol";
import { objectiveSlice } from "entities/objective";
import { playerSlice } from "entities/player";
import { relicSlice } from "entities/relic";
import { secretSlice } from "entities/secret";
import { styxSlice } from "entities/styx";
import { supportSlice } from "entities/support";
import { timelineSlice } from "entities/timeline";

const slices = [
  agendaSlice,
  extraSlice,
  incentiveSlice,
  leakSlice,
  mecatolSlice,
  objectiveSlice,
  playerSlice,
  relicSlice,
  secretSlice,
  styxSlice,
  supportSlice,
  timelineSlice,
];

const initialState = slices.reduce((acc, slice) => {
  acc[slice.key] = slice.createInitialState();
  return acc;
}, {});

export const rootStore = createStore({
  initialState,
  middlewares: [persistBySlices(slices)],
});
