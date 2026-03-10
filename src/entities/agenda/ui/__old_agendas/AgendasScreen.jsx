import HexAgenda from "./HexAgenda";
import Overlay from "core/ui/Overlay";
import ScrollToTop from "core/ui/ScrollToTop";
// import { useAgendas } from "hooks/useAgendas";
import classes from "./AgendasScreen.module.css";

const AgendasScreen = ({ onDiscard, onConfirm }) => {
  const coloredAgendas = []; //useAgendas();

  return (
    <Overlay
      className={classes.container}
      containerId="agendas"
      onDiscard={onDiscard}
      onConfirm={onDiscard}
      withScroll={true}
    >
      <div className={classes.main}>
        {coloredAgendas.map(({ id, colorId }) => (
          <HexAgenda
            key={id}
            cardId={id}
            colorId={colorId}
            onConfirm={onConfirm}
          />
        ))}
      </div>
    </Overlay>
  );
};

export default AgendasScreen;
