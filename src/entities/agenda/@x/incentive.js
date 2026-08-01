import { agendaSelectors } from "../model/selectors";

export const INCENTIVE_ID = "incentiveProgram";
export const selectIsIncentiveAvailable =
  agendaSelectors.makeIncludesId(INCENTIVE_ID);
