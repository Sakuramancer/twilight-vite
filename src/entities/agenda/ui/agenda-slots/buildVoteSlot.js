import { VoteBinaryHex } from "../agenda-item-shared/VoteBinaryHex";
import { VoteColorsHex } from "../agenda-item-shared/VoteColorsHex";

const getMode = ({ agenda, ui }) => {
  const { derived } = agenda;
  const { isBinaryVote, isPlayerVote } = derived;

  const { voteShown, pointVoteShown } = ui;

  if (pointVoteShown) return "pointColorVote";
  if (voteShown) {
    if (isBinaryVote) return "binaryVote";
    if (isPlayerVote) return "colorVote";
  }
  return "none";
};

export const buildVoteSlot = (context) => {
  const { players, actions } = context;
  const { onFinishVoting, onFinishPointVoting } = actions;

  const mode = getMode(context);

  switch (mode) {
    case "pointColorVote":
      return {
        ...VoteColorsHex,
        props: {
          colors: players,
          leftAnchor: false,
          onClick: onFinishPointVoting,
        },
      };
    case "binaryVote":
      return {
        ...VoteBinaryHex,
        props: {
          onClick: onFinishVoting,
        },
      };
    case "colorVote":
      return {
        ...VoteColorsHex,
        props: {
          colors: players,
          leftAnchor: true,
          onClick: onFinishVoting,
        },
      };
    case "none":
    default:
      return {};
  }
};
