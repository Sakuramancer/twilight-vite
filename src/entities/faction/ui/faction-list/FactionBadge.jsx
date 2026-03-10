import classNames from "classnames/bind";
import { factionsAssets } from "../../assets/factions";
import { factionsStatic, getExpansionLabel } from "../../model/factions.data";
import classes from "./FactionBadge.module.css";

const cx = classNames.bind(classes);

const FactionBadge = ({ factionId, isActivated, onClick }) => {
  const { name, expansion } = factionsStatic[factionId];
  const expansionLabel = getExpansionLabel(expansion);

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
        <div className={classes.expansion}>{expansionLabel}</div>
      </div>
    </div>
  );
};

export default FactionBadge;
