import classNames from "classnames/bind";
import { factionsAssets } from "../../assets/factions";
import { factionsStatic } from "../../model/factions.data";
import classes from "./FactionBadge.module.css";

const cx = classNames.bind(classes);

const FactionBadge = ({ factionId, isActivated, onClick }) => {
  const { name } = factionsStatic[factionId];
  const { portrait, icon } = factionsAssets[factionId];
  const { src: portraitSrc, alt: portraitAlt } = portrait;
  const { src: iconSrc, alt: iconAlt } = icon;

  const clickHandler = isActivated ? () => onClick?.(factionId) : undefined;

  const portraitClass = cx({
    image: true,
    imageActive: isActivated,
    imageInactive: !isActivated,
  });

  const labelClass = cx({
    label: true,
    labelActive: isActivated,
  });

  return (
    <div className={classes.item} onClick={clickHandler}>
      <img
        className={portraitClass}
        id={factionId}
        src={portraitSrc}
        alt={portraitAlt}
      />
      <div className={labelClass}>
        <img className={classes.icon} src={iconSrc} alt={iconAlt} />
        <div className={classes.name}>{name.value}</div>
      </div>
    </div>
  );
};

export default FactionBadge;
