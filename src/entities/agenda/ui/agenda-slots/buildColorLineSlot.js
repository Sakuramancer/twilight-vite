import { ColorLineHex } from "../agenda-item-shared/ColorLineHex";

const getMode = ({ agenda, ui }) => {
  if (!ui.voteShown && agenda.derived.isColorLinePoint) return "colorLine";
  return "none";
};

export const buildColorLineSlot = (context) => {
  const { purged, voting, votes } = context.agenda.state;
  const mode = getMode(context);

  switch (mode) {
    case "colorLine":
      return {
        ...ColorLineHex,
        props: {
          colors: context.players,
          voting,
          votes,
          muted: purged,
          onClick: context.actions.onColorLineClick,
        },
      };
    case "none":
    default:
      return {};
  }
};
