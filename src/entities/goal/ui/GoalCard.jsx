import classNames from "classnames/bind";
import { HexedCanvas } from "core/canvas";
import { goalsStatic } from "core/goal/model";
import { GoalCardContent } from "./GoalCardContent";
import colors from "core/data/colors.module.css";
import classes from "./GoalCard.module.css";

const cx = classNames.bind(classes);

const geometry = { width: 610, height: 530, anchorSize: 300 };

const GoalCard = ({ cardId, onConfirm, colorId }) => {
  const { stage } = goalsStatic[cardId];

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
      <GoalCardContent className={contentClass} cardId={cardId} />
    </div>
  );
};

export { GoalCard };
