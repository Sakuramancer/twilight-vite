import { useTimer } from "shared/lib";

export const useAgendaInteractions = (agendaId, commands) => {
  const {
    isActive: redpainted,
    startTimer: showRedpainted,
    stopTimer: hideRedpainted,
  } = useTimer(1000);

  const {
    isActive: voteShown,
    startTimer: showVote,
    stopTimer: hideVote,
  } = useTimer(3000);

  const {
    isActive: pointVoteShown,
    startTimer: showPointVote,
    stopTimer: hidePointVote,
  } = useTimer(3000);

  const onTitleClick =
    voteShown || pointVoteShown
      ? undefined
      : () => {
          if (!redpainted) {
            showRedpainted();
            return;
          }
          hideRedpainted();
          commands.resetAgenda(agendaId);
        };

  const onPlayerClick = () => {
    if (!voteShown) {
      showVote();
      return;
    }
    hideVote();
    commands.toggleAgendaPurged(agendaId);
  };

  const onFinishVoting = (voting) => {
    hideVote();
    commands.setAgendaVoting(agendaId, voting);
  };

  const onColorLineClick = (playerIndex) => {
    commands.toggleAgendaPlayerVote(agendaId, playerIndex);
  };

  const onVotePointClick = () => {
    if (pointVoteShown) return;
    showPointVote();
  };

  const onFinishPointVoting = (playerIndex) => {
    hidePointVote();
    commands.setAgendaPoint(agendaId, playerIndex);
  };

  const onTogglePoint = () => {
    commands.toggleAgendaPoint(agendaId);
  };

  return {
    ui: { voteShown, pointVoteShown, redpainted },
    actions: {
      onTitleClick,
      onPlayerClick,
      onFinishVoting,
      onColorLineClick,
      onVotePointClick,
      onFinishPointVoting,
      onTogglePoint,
    },
  };
};
