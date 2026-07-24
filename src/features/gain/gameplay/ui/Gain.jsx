import { useState } from "react";
import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { useStore } from "shared/store";
import {
  gainsAssets,
  gainSelectors,
  gainsMeta,
  getGainCommands,
  ACTIVE_VALUE,
  INACTIVE_VALUE,
} from "entities/gain";
import { ColorSelection, playerSelectors } from "entities/player";
import StaticPetals from "./StaticPetals";
import classes from "./Gain.module.css";

const cx = classNames.bind(classes);

const Gain = ({ className, gainId }) => {
  const commands = getGainCommands();
  const stateIndex = useStore(gainSelectors.makeGain(gainId));
  const players = useStore(playerSelectors.selectPlayers);
  const isMuted = stateIndex === INACTIVE_VALUE;
  const isPlayerSelected = stateIndex > ACTIVE_VALUE;
  const colorId = isPlayerSelected ? players[stateIndex].colorId : "";

  const { title } = gainsMeta[gainId];
  const { src, alt } = gainsAssets[gainId];
  const [showColorSelection, setShowColorSelection] = useState(false);

  const clickHandler = (_) => {
    if (isMuted)
    {
      commands.activateGain(gainId);
      return;
    }
    if (showColorSelection) {
      commands.deactivateGain(gainId);
    }
    setShowColorSelection((value) => !value);
  };
  const onSelection = (playerIndex) => commands.setGain(gainId, playerIndex);

  const confirmHandler = () => setShowColorSelection(false);

  const groupClass = cx({
    group: true,
    idleGroup: !showColorSelection,
    [colorClasses[colorId]]: isPlayerSelected,
  });

  const imageClass = cx({
    image: true,
    ["image-muted"]: isMuted,
  });

  return (
    <div className={className}>
      <div className={groupClass}>
        <img
          className={imageClass}
          src={src}
          alt={alt}
          onClick={clickHandler}
        />
        {!showColorSelection && isPlayerSelected && (
          <StaticPetals
            className={classes.staticPetals}
            onClick={clickHandler}
          />
        )}
        {!showColorSelection && !isMuted && (
          <div className={classes.label} onClick={clickHandler}>
            {title.value}
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

export default Gain;
