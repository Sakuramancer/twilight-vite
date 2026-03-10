import classNames from "classnames/bind";
import HexedCanvas from "core/canvas/HexedCanvas";
import classes from "./AgendaHex.module.css";

const cx = classNames.bind(classes);

const AgendaHex = ({ anchorSize }) => {
  const hexClass = cx({
    hex: true,
  });

  return (
    <g>
      <HexedCanvas.ExtendedHex className={hexClass} anchorSize={anchorSize} />
    </g>
  );
};

export default AgendaHex;
