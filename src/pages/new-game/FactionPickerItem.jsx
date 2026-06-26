import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { useStore } from "shared/store";
import { HexedCanvas, HexLayout } from "shared/ui";
import { factionsAssets, playerSelectors } from "entities/player";
import classes from "./FactionPickerItem.module.css";

const cx = classNames.bind(classes);

const geometry = { width: 52, height: 60, anchorSize: 20 };

const FactionPickerItem = ({
  playerIndex,
  isPlayerActivated,
  isColorActivated,
  onPlayerSelected,
  onColorSelected,
}) => {
  const { colorId, factionId } = useStore(
    playerSelectors.makePlayer(playerIndex),
  );
  const { portrait, icon } = factionsAssets[factionId];
  const { src: portraitSrc, alt: portraitAlt } = portrait;
  const { src: iconSrc, alt: iconAlt } = icon;

  const imageClickHandler = () => onPlayerSelected(playerIndex);
  const hexClickHandler = () => onColorSelected(playerIndex);

  const portraitClass = cx({
    portrait: true,
    active: isPlayerActivated,
  });

  const iconClass = cx({
    icon: true,
    active: isPlayerActivated,
  });

  const canvasClass = cx({
    canvas: true,
    colorActive: isColorActivated,
  });

  const hexClass = cx({
    hex: true,
    [colorClasses[colorId]]: true,
    activeHex: isColorActivated,
    inactiveHex: !isColorActivated,
  });

  return (
    <HexLayout.Item>
      <img
        className={portraitClass}
        src={portraitSrc}
        alt={portraitAlt}
        onClick={imageClickHandler}
      />
      <img
        className={iconClass}
        src={iconSrc}
        alt={iconAlt}
        onClick={imageClickHandler}
      />
      <HexedCanvas className={canvasClass} geometry={geometry}>
        <HexedCanvas.Hex className={hexClass} onClick={hexClickHandler} />
      </HexedCanvas>
    </HexLayout.Item>
  );
};

export default FactionPickerItem;
