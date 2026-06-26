import { useState } from "react";
import { useDocumentTitle } from "shared/lib";
import { getPlayerCommands, FactionList } from "entities/player";
import FactionPicker from "./FactionPicker";
import SettingsMenu from "./SettingsMenu";
import classes from "./NewGamePage.module.css";

const NewGamePage = () => {
  useDocumentTitle("Новая игра | Сумерки");
  const commands = getPlayerCommands();
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

export { NewGamePage };
