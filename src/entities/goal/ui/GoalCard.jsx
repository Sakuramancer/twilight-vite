import classNames from "classnames/bind";
import HexedCanvas from "core/canvas/HexedCanvas";
import colors from "core/data/colors.module.css";
import { goalsStatic } from "../model/goal.data";
import { GoalCardContent } from "./GoalCardContent";
import classes from "./GoalCard.module.css";

const cx = classNames.bind(classes);

const geometry = { width: 610, height: 530, anchorSize: 300 };

const GoalCard = ({ cardId, onConfirm, colorId }) => {
  const card = goalsStatic[cardId];
  const stage = card.stage;

  const clickHandler = () => {
    onConfirm?.(cardId);
  };

  const mainClass = cx({
    main: true,
    [colors[colorId]]: colorId,
  });

  const hexClass = cx({
    hex: true,
    [`${stage}-fill`]: !colorId,
    colorFill: colorId,
    [`${stage}-stroke`]: true,
    pointer: onConfirm,
  });

  const contentClass = cx({
    content: true,
    defaultContent: !colorId,
    coloredContent: colorId,
  });

  return (
    <div className={mainClass}>
      <HexedCanvas className={classes.canvas} geometry={geometry}>
        <HexedCanvas.Hex className={hexClass} onClick={clickHandler} />
      </HexedCanvas>
      <GoalCardContent className={contentClass} card={card} />
    </div>
  );
};

export { GoalCard };
