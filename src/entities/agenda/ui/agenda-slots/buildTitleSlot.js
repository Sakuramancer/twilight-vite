import { TitleHex } from "../agenda-item-shared/TitleHex";

export const buildTitleSlot = ({ agenda, ui, actions }) => {
  const { state, meta, derived } = agenda;
  const { title, type } = meta;
  const { purged } = state;
  const { isBinaryVote, isPlayerVote } = derived;

  const { voteShown, pointVoteShown, redpainted } = ui;
  const { onTitleClick } = actions;

  const voteVisible = voteShown && (isBinaryVote || isPlayerVote);
  const titleVisible = !pointVoteShown && !voteVisible;

  return {
    ...TitleHex,
    props: {
      title: title.value,
      titleVisible,
      type,
      centered: false,
      muted: purged,
      redpainted,
      onClick: onTitleClick,
    },
  };
};
