import classNames from "classnames/bind";
import { useStore } from "shared/store";
import { GoalCardTitleContent, petals } from "entities/goal";
import { leakSelectors } from "entities/leak";
import LeakCanvas from "./LeakCanvas";
import LeakIcons from "./LeakIcons";
import classes from "./LeakFlower.module.css";

const cx = classNames.bind(classes);

const LeakFlower = ({ onSelectCard }) => {
  const { cardId } = useStore(leakSelectors.selectLeak);

  const mainClass = cx({
    main: true,
    [petals.onHover]: cardId,
  });

  return (
    <div className={mainClass}>
      <LeakCanvas onSelectCard={onSelectCard} />
      <LeakIcons className={classes.icons} />
      {cardId && (
        <GoalCardTitleContent className={classes.content} cardId={cardId} />
      )}
    </div>
  );
};

export { LeakFlower };
