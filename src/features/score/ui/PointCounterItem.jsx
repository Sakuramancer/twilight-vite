import classNames from "classnames/bind";
import HexedCanvas from "core/canvas/HexedCanvas";
import colors from "core/data/colors.module.css";
import { useStore } from "core/store/StoreContext";
import HexLayout from "core/ui/HexLayout";
import { factionsAssets } from "entities/faction/assets";
import { factionsStatic } from "entities/faction/model";
import { getFactionCommands } from "entities/faction/ports";
import { scoreSelectors } from "../model/score.selectors";
import classes from "./PointCounterItem.module.css";

const cx = classNames.bind(classes);

const geometry = { width: 70, height: 52, anchorSize: 19 };
const iconAnchorPoint = { x: 20, y: 17.32 };
const scoreAnchorPoint = { x: 50, y: 34.64 };

const PointCounterItem = ({ position }) => {
  const commands = getFactionCommands();
  const { colorId, factionId, score } = useStore(
    scoreSelectors.makeScoreForPlayer(position),
  );

  const { portrait, icon } = factionsAssets[factionId];
  const { src: portraitSrc, alt: portraitAlt } = portrait;
  const { src: iconSrc, alt: iconAlt } = icon;

  const isSwitchable = factionsStatic[factionId].switchTo;
  const switchHandler = isSwitchable
    ? () => commands.switchFaction(position)
    : undefined;

  const itemClass = cx({
    [colors[colorId]]: true,
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
      <div className={classes.score}>{score}</div>
    </HexLayout.Item>
  );
};

export default PointCounterItem;
