import classNames from "classnames/bind";
import { useStore } from "core/store/StoreContext";
import HexLayout from "core/ui/HexLayout";
import { factionsAssets } from "entities/faction/assets";
import classes from "./ObjectiveIcons.module.css";
import petals from "./petals.module.css";

const cx = classNames.bind(classes);

const ObjectiveIcons = ({ className, cardIndex }) => {
  const factions = useStore((s) => s.factions);
  const { cardId: isActiveFlower, points } = useStore(
    (s) => s.objectives[cardIndex],
  );

  const imageClasses = factions.map((_, index) =>
    cx({
      image: true,
      checkedPetal: isActiveFlower && points[index],
      [petals[`onHoverIndex${index}`]]: !isActiveFlower || !points[index],
    }),
  );

  return (
    <div className={className}>
      <HexLayout className={classes.grid}>
        {factions
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

export default ObjectiveIcons;
