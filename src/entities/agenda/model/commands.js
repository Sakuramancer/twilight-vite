import {
  activate,
  togglePurged,
  resetOne,
  resetAll,
} from "../model";

export const createAgendaCommands = (store) => ({
  activateAgenda: (agendaId) => {
    const { agendas } = store.get();
    store.set({ agendas: activate(agendas, agendaId) });
  },

  toggleAgendaPurged: (agendaId) => {
    const { agendas } = store.get();
    store.set({ agendas: togglePurged(agendas, agendaId) });
  },

  resetAgenda: (agendaId) => {
    const { agendas } = store.get();
    store.set({ agendas: resetOne(agendas, agendaId) });
  },

  resetAgendas: () => {
    const { agendas } = store.get();
    store.set({ agendas: resetAll(agendas) });
  },
});
