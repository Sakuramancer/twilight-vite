import { localStorageAdapter } from "core/store/storage/localStorageAdapter";
import { normalizeAgendas } from "./agendas.normalize";

export const agendaSlice = {
  key: "agendas",
  storageKey: "twi-agendas",
  storage: localStorageAdapter,
  selector: (s) => s.agendas,

  createInitialState: () => {
    const persisted = agendaSlice.storage.get(agendaSlice.storageKey);
    return normalizeAgendas(persisted);
  },
};
