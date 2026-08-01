import { useState } from "react";
import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { useStore } from "shared/store";
import {
  getStyxCommands,
  RESET_VALUE,
  styxImage,
  styxSelectors,
} from "entities/styx";
import { ColorSelection, playerSelectors } from "entities/player";
import StaticPetals from "./StaticPetals";
import classes from "./Styx.module.css";

const cx = classNames.bind(classes);

const Styx = ({ className }) => {
  const commands = getStyxCommands();
  const { isActive, owner } = useStore(styxSelectors.selectStyx);
  const players = useStore(playerSelectors.selectPlayers);
  const isPlayerSelected = isActive && owner > RESET_VALUE;
  const colorId = isPlayerSelected ? players[owner].colorId : "";

  const [showColorSelection, setShowColorSelection] = useState(false);

  const clickHandler = (_) => {
    if (!isActive) {
      commands.activateStyx();
      return;
    }
    if (showColorSelection) {
      commands.resetStyx();
    }
    setShowColorSelection((value) => !value);
  };
  const onSelection = (playerIndex) => commands.setStyxOwner(playerIndex);

  const confirmHandler = () => setShowColorSelection(false);

  const mainClass = cx(className, {
    main: true,
  });
  const groupClass = cx({
    group: true,
    idleGroup: !showColorSelection,
    [colorClasses[colorId]]: isPlayerSelected,
  });

  const imageClass = cx({
    image: true,
    "image-muted": !isActive,
  });

  return (
    <div className={mainClass}>
      <div className={groupClass}>
        <img
          className={imageClass}
          src={styxImage}
          alt="Styx"
          onClick={clickHandler}
        />
        {!showColorSelection && isPlayerSelected && (
          <StaticPetals
            className={classes.staticPetals}
            onClick={clickHandler}
          />
        )}
        {!showColorSelection && isActive && (
          <div className={classes.label} onClick={clickHandler}>
            Стикс
          </div>
        )}
      </div>
      {showColorSelection && (
        <ColorSelection
          className={classes.petals}
          onSelection={onSelection}
          onConfirm={confirmHandler}
        />
      )}
    </div>
  );
};

export { Styx };
