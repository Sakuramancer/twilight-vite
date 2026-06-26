import { AgendaView } from "../agenda-item-shared/AgendaView";
import { buildColorLineSlot } from "./buildColorLineSlot";
import { buildPlayerSlot } from "./buildPlayerSlot";
import { buildPointSlot } from "./buildPointSlot";
import { buildTitleSlot } from "./buildTitleSlot";
import { buildVoteSlot } from "./buildVoteSlot";

export const resolveAgendaSlots = (context) => ({
  TitleSlot: buildTitleSlot(context),
  PlayerSlot: buildPlayerSlot(context),
  PointSlot: buildPointSlot(context),
  VoteSlot: buildVoteSlot(context),
  ColorLineSlot: buildColorLineSlot(context),
});
