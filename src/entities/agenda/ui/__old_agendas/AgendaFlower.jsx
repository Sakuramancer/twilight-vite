import { agendasStatic } from "entities/agenda";
import HexedCanvas from "core/canvas/HexedCanvas";
import AgendaHex from "./AgendaHex";
import AgendaContent from "./AgendaContent";
import classes from "./AgendaFlower.module.css";

const anchorSize = 95;
const centerX = 1.05 * anchorSize;
const centerY = 1.1 * anchorSize;
const geometry = {
  width: 10 * anchorSize,
  height: 2 * centerY,
  anchorSize,
};

const AgendaFlower = ({ agendaId }) => {
  const card = agendasStatic[agendaId] ?? { title: { value: "???" } };

  return (
    <div className={classes.main}>
      <HexedCanvas className={classes.canvas} geometry={geometry}>
        <AgendaHex
          anchorPoint={{ x: centerX, y: centerY }}
          anchorSize={anchorSize}
        />
      </HexedCanvas>
      <AgendaContent className={classes.content} card={card} />
    </div>
  );
};

export default AgendaFlower;
