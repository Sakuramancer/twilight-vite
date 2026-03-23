import { PLAYER_COUNT } from "core/player";
import { HexLayout } from "core/ui";
import { mecatolImage } from "../../assets";
import MecatolField from "./MecatolField";
import classes from "./MecatolMain.module.css";

const MecatolMain = ({ className }) => {
  return (
    <div className={className}>
      <img className={classes.mecatol} src={mecatolImage} alt="Mecatol Rex" />
      <HexLayout className={classes.grid}>
        {Array.from({ length: PLAYER_COUNT }, (_, index) => (
          <HexLayout.Item key={index}>
            <MecatolField className={classes.field} playerIndex={index} />
          </HexLayout.Item>
        ))}
      </HexLayout>
    </div>
  );
};

export { MecatolMain };
