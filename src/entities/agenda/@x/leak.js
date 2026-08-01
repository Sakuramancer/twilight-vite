import { agendaSelectors } from "../model/selectors";

export const LEAK_ID = "classifiedDocumentLeaks";
export const selectIsLeakAvailable = agendaSelectors.makeIncludesId(LEAK_ID);
