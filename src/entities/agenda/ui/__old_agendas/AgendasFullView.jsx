import { useState } from "react";
import classNames from "classnames/bind";
import HexedCanvas from "core/canvas/HexedCanvas";
import { buttonGeometry } from "core/canvas/geometry";
import AgendasScreen from "./AgendasScreen";
import classes from "./AgendasFullView.module.css";

const cx = classNames.bind(classes);

const AgendasFullView = ({ className }) => {
  const [showAgendasScreen, setShowAgendasScreen] = useState(false);

  const showAgendasHandler = () => setShowAgendasScreen(true);
  const discardHandler = () => setShowAgendasScreen(false);

  const hexClass = cx({
    hex: true,
    active: showAgendasScreen,
    inactive: !showAgendasScreen,
  });

  return (
    <div className={className}>
      <HexedCanvas className={classes.canvas} geometry={buttonGeometry}>
        <HexedCanvas.Hex className={hexClass} onClick={showAgendasHandler} />
        <HexedCanvas.Plus className={classes.plusIcon} />
      </HexedCanvas>
      <HexedCanvas className={classes.canvas} geometry={buttonGeometry}>
        <HexedCanvas.Hex className={hexClass} onClick={showAgendasHandler} />
        <HexedCanvas.Eye className={classes.icon} />
      </HexedCanvas>
      {showAgendasScreen && (
        <AgendasScreen className={classes.table} onDiscard={discardHandler} />
      )}
    </div>
  );
};

export default AgendasFullView;
