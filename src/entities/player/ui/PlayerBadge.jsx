import classNames from "classnames/bind";
import { colorClasses } from "shared/config";
import { HexedCanvas, HexLayout } from "shared/ui";
import { factionsAssets } from "../assets";
import classes from "./PlayerBadge.module.css";

const cx = classNames.bind(classes);

const geometry = { width: 70, height: 52, anchorSize: 19 };
const iconAnchorPoint = { x: 20, y: 17.32 };
const scoreAnchorPoint = { x: 50, y: 34.64 };

const PlayerBadge = ({ colorId, factionId, value, isSwitchable, onSwitch }) => {
  const { portrait, icon } = factionsAssets[factionId];
  const { src: portraitSrc, alt: portraitAlt } = portrait;
  const { src: iconSrc, alt: iconAlt } = icon;

  const switchHandler = isSwitchable ? onSwitch : undefined;

  const itemClass = cx({
    item: true,
    [colorClasses[colorId]]: true,
  });

  const iconHexClass = cx({
    iconHex: true,
    hoverableIconHex: isSwitchable,
  });

  return (
    <HexLayout.Item className={itemClass}>
      <img className={classes.portrait} src={portraitSrc} alt={portraitAlt} />
      <HexedCanvas className={classes.canvas} geometry={geometry}>
        <HexedCanvas.Hex
          className={iconHexClass}
          anchorPoint={iconAnchorPoint}
          onClick={switchHandler}
        />
        <HexedCanvas.Hex
          className={classes.pointsHex}
          anchorPoint={scoreAnchorPoint}
        />
      </HexedCanvas>
      <img className={classes.icon} src={iconSrc} alt={iconAlt} />
      <div className={classes.value}>{value}</div>
    </HexLayout.Item>
  );
};

export { PlayerBadge };
