import classNames from "classnames/bind";
import { agendasStatic } from "entities/agenda";
import HexedCanvas from "core/canvas/HexedCanvas";
import AgendaContent from "./AgendaContent";
import classes from "./HexAgenda.module.css";
import colors from "data/colors.module.css";

const cx = classNames.bind(classes);

const geometry = { width: 610, height: 530, anchorSize: 300 };

const HexAgenda = ({ cardId, colorId, onConfirm }) => {
  const card = agendasStatic[cardId];

  const clickHandler = () => {
    if (onConfirm) {
      onConfirm(cardId);
    }
  };

  const mainClass = cx({
    main: true,
    [colors[colorId]]: colorId,
  });

  const hexClass = cx({
    hex: true,
    colorFill: colorId,
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
      <AgendaContent className={contentClass} card={card} />
    </div>
  );
};

export default HexAgenda;
