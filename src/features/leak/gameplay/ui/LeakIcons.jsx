import classNames from "classnames/bind";
import { useStore } from "shared/store";
import { HexLayout } from "shared/ui";
import { petals } from "entities/goal";
import { leakSelectors } from "entities/leak";
import { factionsAssets, playerSelectors } from "entities/player";
import classes from "./LeakIcons.module.css";

const cx = classNames.bind(classes);

const LeakIcons = ({ className }) => {
  const players = useStore(playerSelectors.selectPlayers);
  const { cardId: isActiveFlower, points } = useStore(leakSelectors.selectLeak);

  const imageClasses = players.map((_, index) =>
    cx({
      image: true,
      checkedPetal: isActiveFlower && points[index],
      [petals[`onHoverIndex${index}`]]: !isActiveFlower || !points[index],
    }),
  );

  return (
    <div className={className}>
      <HexLayout className={classes.grid}>
        {players
          .map(({ factionId }) => factionsAssets[factionId].icon)
          .map(({ src, alt }, index) => (
            <HexLayout.Item key={index}>
              <img className={imageClasses[index]} src={src} alt={alt} />
            </HexLayout.Item>
          ))}
      </HexLayout>
    </div>
  );
};

export default LeakIcons;
