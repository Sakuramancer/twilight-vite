import { useState } from "react";
import classNames from "classnames/bind";
import { gainsAssets } from "core/assets/gains";
import colorClasses from "core/data/colors.module.css";
import { useStore } from "core/store/StoreContext";
import { gainsStatic } from "../../model/gains.data";
import { getGainCommands } from "../../ports/gainCommands.port";
import ColorSelection from "./ColorSelection";
import StaticPetals from "./StaticPetals";
import classes from "./Gain.module.css";

const cx = classNames.bind(classes);

const Gain = ({ className, gainId }) => {
  const commands = getGainCommands();
  const stateIndex = useStore((s) => s.gains[gainId]);
  const colors = useStore((s) => s.colors);
  const colorId = stateIndex > -1 ? colors[stateIndex].colorId : "";

  const { title } = gainsStatic[gainId];
  const { src, alt } = gainsAssets[gainId];
  const [showColorSelection, setShowColorSelection] = useState(false);

  const clickHandler = () => {
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
