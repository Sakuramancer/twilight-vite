import { BinaryHex } from "../agenda-item-shared/BinaryHex";
import { EmptyHex } from "../agenda-item-shared/EmptyHex";
import { PlayerHex } from "../agenda-item-shared/PlayerHex";

const getMode = ({ agenda, ui }) => {
  const { binaryVoted, playerVoted } = agenda.derived;
  const { voteShown, pointVoteShown } = ui;

  if (pointVoteShown) return "hidden";
  if (voteShown) return "votePurge";
  if (binaryVoted) return "binaryVoted";
  if (playerVoted) return "playerVoted";
  return "readyToBeVoted";
};

export const buildPlayerSlot = (context) => {
  const { agenda, players, actions } = context;
  const { state, meta, derived } = agenda;
  const { type } = meta;
  const { purged, voting } = state;
  const { isColorLinePoint, needToBeVoted } = derived;

  const { onPlayerClick: onClick } = actions;
  const colorId = players[voting]?.colorId ?? "_default";

  const mode = getMode(context);
  switch (mode) {
    case "hidden":
      return {};
    case "votePurge":
      return {
        ...EmptyHex,
        props: {
          type,
          muted: purged,
          onClick,
          content: purged ? "⇑" : "⇓",
          contentVisible: true,
        },
      };
    case "binaryVoted":
      return {
        ...BinaryHex,
        props: {
          pointVisible: isColorLinePoint,
          muted: purged,
          voting,
          onClick,
        },
      };
    case "playerVoted":
      return {
        ...PlayerHex,
        props: {
          colorId,
          striped: purged,
          type,
          onClick,
          contentVisible: false,
        },
      };
    case "readyToBeVoted":
      return {
        ...EmptyHex,
        props: {
          type,
          muted: purged && !needToBeVoted,
          onClick,
          content: "?",
          contentVisible: needToBeVoted,
        },
      };
  }
};
