import {
  activate,
  togglePurged,
  setPoint,
  setVoting,
  togglePlayerVote,
  togglePoint,
  resetOne,
  resetAll,
} from "./model";

export const createAgendaCommands = (store) => ({
  activateAgenda: (agendaId) => {
    const { agendas } = store.get();
    store.set({ agendas: activate(agendas, agendaId) });
  },

  toggleAgendaPurged: (agendaId) => {
    const { agendas } = store.get();
    store.set({ agendas: togglePurged(agendas, agendaId) });
  },

  setAgendaVoting: (agendaId, voting) => {
    const { agendas } = store.get();
    store.set({ agendas: setVoting(agendas, agendaId, voting) });
  },

  setAgendaPoint: (agendaId, playerIndex) => {
    const { agendas } = store.get();
    store.set({ agendas: setPoint(agendas, agendaId, playerIndex) });
  },

  toggleAgendaPoint: (agendaId) => {
    const { agendas } = store.get();
    store.set({ agendas: togglePoint(agendas, agendaId) });
  },

  toggleAgendaPlayerVote: (agendaId, playerIndex) => {
    const { agendas } = store.get();
    store.set({ agendas: togglePlayerVote(agendas, agendaId, playerIndex) });
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
