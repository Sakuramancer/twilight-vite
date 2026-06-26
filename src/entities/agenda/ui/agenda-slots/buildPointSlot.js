import { PointHex } from "../agenda-item-shared/PointHex";

export const buildPointSlot = ({ agenda, players, ui, actions }) => {
  const { state, meta, derived } = agenda;
  const { type } = meta;
  const { purged, voting, pointVote } = state;
  const { isSeparatePoint, isElectedPoint, isPlayerVote, voted } = derived;
  const { voteShown, pointVoteShown } = ui;
  const { onVotePointClick, onTogglePoint } = actions;

  const playerVoted = isElectedPoint ? voting : pointVote;
  const colorId = players[playerVoted]?.colorId ?? "_default";

  const onClick =
    !voted || pointVoteShown
      ? undefined
      : isSeparatePoint
        ? onVotePointClick
        : onTogglePoint;

  if (!isSeparatePoint && !isElectedPoint) return {};
  if (voteShown && isPlayerVote) return {};

  return {
    ...PointHex,
    props: {
      type,
      muted: type === "law" && purged,
      colorId,
      colored: pointVote > -1,
      onClick,
    },
  };
};
