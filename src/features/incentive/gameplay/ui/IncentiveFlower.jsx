import classNames from "classnames/bind";
import { useStore } from "shared/store";
import { GoalCardTitleContent, petals } from "entities/goal";
import { incentiveSelectors } from "entities/incentive";
import IncentiveCanvas from "./IncentiveCanvas";
import IncentiveIcons from "./IncentiveIcons";
import classes from "./IncentiveFlower.module.css";

const cx = classNames.bind(classes);

const IncentiveFlower = ({ onSelectCard }) => {
  const { cardId } = useStore(incentiveSelectors.selectIncentive);

  const mainClass = cx({
    main: true,
    [petals.onHover]: cardId,
  });

  return (
    <div className={mainClass}>
      <IncentiveCanvas onSelectCard={onSelectCard} />
      <IncentiveIcons className={classes.icons} />
      {cardId && (
        <GoalCardTitleContent className={classes.content} cardId={cardId} />
      )}
    </div>
  );
};

export { IncentiveFlower };
