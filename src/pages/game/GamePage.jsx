import { useDocumentTitle } from "shared/lib";
import { GameMenu } from "shared/ui";
import { LeaderBackground, PointCounter } from "entities/player";
import { Gains } from "features/gain/gameplay";
import { MecatolMain } from "features/mecatol/gameplay";
import { PointTable } from "widgets/gameplay-table";
import { Objectives } from "widgets/objectives";
import classes from "./GamePage.module.css";

const GamePage = () => {
  useDocumentTitle("Партия | Сумерки");

  return (
    <div className={classes.main}>
      <LeaderBackground />
      <GameMenu className={classes.menu} />
      <PointCounter className={classes.pointCounter} />
      <PointTable className={classes.pointTable} />
      <MecatolMain className={classes.mecatol} />
      <Gains className={classes.gains} />
      <Objectives className={classes.objectives} />
    </div>
  );
};

export { GamePage };
