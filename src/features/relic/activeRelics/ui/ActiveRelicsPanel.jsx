import { PLAYER_COUNT } from "core/player";
import { Overlay } from "core/ui";
import PlayerRelics from "./PlayerRelics";
import classes from "./ActiveRelicsPanel.module.css";

const ActiveRelicsPanel = ({ onDiscard }) => {
  return (
    <Overlay
      className={classes.container}
      containerId="relics"
      onDiscard={onDiscard}
      onConfirm={onDiscard}
      withScroll={true}
    >
      <div className={classes.main}>
        <div className={classes.header}>Реликвии</div>
        <div className={classes.table}>
          {Array.from({ length: PLAYER_COUNT }, (_, index) => (
            <PlayerRelics key={index} playerIndex={index} />
          ))}
        </div>
      </div>
    </Overlay>
  );
};

export { ActiveRelicsPanel };
