import { createStore, persistBySlices } from "shared/store";
import { agendaSlice } from "entities/agenda";
import { extraSlice } from "entities/extra";
import { gainSlice } from "entities/gain";
import { mecatolSlice } from "entities/mecatol";
import { objectiveSlice } from "entities/objective";
import { playerSlice } from "entities/player";
import { relicSlice } from "entities/relic";
import { secretSlice } from "entities/secret";
import { supportSlice } from "entities/support";

const slices = [
  agendaSlice,
  extraSlice,
  gainSlice,
  mecatolSlice,
  objectiveSlice,
  playerSlice,
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
