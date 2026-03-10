import { useState } from "react";
import { getFactionCommands } from "entities/faction/ports";
import { FactionList } from "entities/faction/ui";
import FactionPicker from "./FactionPicker";
import SettingsMenu from "./SettingsMenu";
import classes from "./SettingsView.module.css";

const SettingsView = () => {
  const commands = getFactionCommands();
  const [playerActivated, setPlayerActivated] = useState(-1);

  const isActivated = playerActivated > -1;

  const selectionHandler = (factionId) => {
    const currentPlayerActivated = playerActivated;
    commands.setFaction(currentPlayerActivated, factionId);
    setPlayerActivated(-1);
  };

  return (
    <div className={classes.main}>
      <FactionPicker
        className={classes.colorPicker}
        playerActivated={playerActivated}
        setPlayerActivated={setPlayerActivated}
      />
      <FactionList
        className={classes.factions}
        isActivated={isActivated}
        onSelection={selectionHandler}
      />
      <SettingsMenu />
    </div>
  );
};

export { SettingsView };
