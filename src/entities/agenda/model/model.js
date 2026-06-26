import { validatePlayerIndex } from "shared/config";
import {
  createDefaultAgenda,
  createDefaultAgendas,
  createDefaultVotes,
} from "./defaults";
import { validateAgenda } from "./validate";

export const activate = (agendas, agendaId) => {
  if (!validateAgenda(agendaId)) {
    throw new Error("Incorrect agenda id");
  }
  const agenda = agendas[agendaId] ?? createDefaultAgenda();
  return {
    ...agendas,
    [agendaId]: { ...agenda, active: true },
  };
};

export const togglePurged = (agendas, agendaId) => {
  if (!validateAgenda(agendaId)) {
    throw new Error("Incorrect agenda id");
  }
  if (!(agendaId in agendas)) return agendas;
  const agenda = agendas[agendaId];
  return { ...agendas, [agendaId]: { ...agenda, purged: !agenda.purged } };
};

export const setVoting = (agendas, agendaId, voting) => {
  if (!validateAgenda(agendaId)) {
    throw new Error("Incorrect agenda id");
  }
  if (!(agendaId in agendas)) return agendas;
  const agenda = agendas[agendaId];
  return { ...agendas, [agendaId]: { ...agenda, voting } };
};

export const setPoint = (agendas, agendaId, playerIndex) => {
  if (!validateAgenda(agendaId)) {
    throw new Error("Incorrect agenda id");
  }
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  if (!(agendaId in agendas)) return agendas;
  const agenda = agendas[agendaId];
  return { ...agendas, [agendaId]: { ...agenda, pointVote: playerIndex } };
};

export const togglePoint = (agendas, agendaId) => {
  if (!validateAgenda(agendaId)) {
    throw new Error("Incorrect agenda id");
  }
  if (!(agendaId in agendas)) return agendas;
  const agenda = agendas[agendaId];
  const pointVote = agenda.pointVote > -1 ? -1 : 1;
  return { ...agendas, [agendaId]: { ...agenda, pointVote } };
};

export const togglePlayerVote = (agendas, agendaId, playerIndex) => {
  if (!validateAgenda(agendaId)) {
    throw new Error("Incorrect agenda id");
  }
  if (!validatePlayerIndex(playerIndex)) {
    throw new Error("Incorrect player index");
  }
  if (!(agendaId in agendas)) return agendas;
  const agenda = agendas[agendaId];
  const votes = (agenda.votes ?? createDefaultVotes()).map((vote, index) =>
    index === playerIndex ? !vote : vote,
  );
  return {
    ...agendas,
    [agendaId]: {
      ...agenda,
      votes,
    },
  };
};

export const resetOne = (agendas, agendaId) => {
  if (!validateAgenda(agendaId)) {
    throw new Error("Incorrect agenda id");
  }
  const { [agendaId]: _, ...rest } = agendas;
  return rest;
};

export const resetAll = (_) => createDefaultAgendas();
