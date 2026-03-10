import { persistBySlices } from "core/store/middleware/persist";
import { createStore } from "core/store/createStore";
import { agendaSlice } from "entities/agenda/model";
import { colorSlice } from "entities/color/model";
import { extraSlice } from "entities/extra/model";
import { factionSlice } from "entities/faction/model";
import { gainSlice } from "entities/gain/model";
import { mecatolSlice } from "entities/mecatol/model";
import { objectiveSlice } from "entities/objective/model";
import { relicSlice } from "entities/relic/model";
import { secretSlice } from "entities/secret/model";
import { supportSlice } from "entities/support/model";

const slices = [
  agendaSlice,
  colorSlice,
  extraSlice,
  factionSlice,
  gainSlice,
  mecatolSlice,
  objectiveSlice,
  relicSlice,
  secretSlice,
  supportSlice,
];

const initialState = slices.reduce((acc, slice) => {
  acc[slice.key] = slice.createInitialState();
  return acc;
}, {});

export const rootStore = createStore({
  initialState,
  middlewares: [persistBySlices(slices)],
});
