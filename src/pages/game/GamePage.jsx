import { useDocumentTitle } from "shared/lib";
import { GameMenu } from "shared/ui";
import { ClockTimelineWidget } from "entities/clock";
import { LeaderBackground, PointCounter } from "entities/player";
import { Gains } from "widgets/gains";
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
      <Gains className={classes.gains} />
      <ClockTimelineWidget className={classes.clock} />
      <Objectives className={classes.objectives} />
    </div>
  );
};

export { GamePage };
