import { useState } from "react";
import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { useStore } from "shared/store";
import { ColorSelection, playerSelectors } from "entities/player";
import {
  gainsAssets,
  gainSelectors,
  gainsMeta,
  getGainCommands,
} from "entities/gain";
import StaticPetals from "./StaticPetals";
import classes from "./Gain.module.css";

const cx = classNames.bind(classes);

const Gain = ({ className, gainId }) => {
  const commands = getGainCommands();
  const stateIndex = useStore(gainSelectors.makeGain(gainId));
  const players = useStore(playerSelectors.selectPlayers);
  const colorId = stateIndex > -1 ? players[stateIndex].colorId : "";

  const { title } = gainsMeta[gainId];
  const { src, alt } = gainsAssets[gainId];
  const [showColorSelection, setShowColorSelection] = useState(false);

  const clickHandler = (_) => {
    if (showColorSelection) {
      commands.resetGain(gainId);
    }
    setShowColorSelection((value) => !value);
  };
  const onSelection = (playerIndex) => commands.setGain(gainId, playerIndex);

  const confirmHandler = () => setShowColorSelection(false);

  const groupClass = cx({
    group: true,
    idleGroup: !showColorSelection,
    [colorClasses[colorId]]: stateIndex > -1,
  });

  const imageClass = cx({
    image: true,
    coloredImage: !showColorSelection && stateIndex > -1,
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
        {!showColorSelection && stateIndex > -1 && (
          <StaticPetals
            className={classes.staticPetals}
            onClick={clickHandler}
          />
        )}
        {!showColorSelection && (
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
