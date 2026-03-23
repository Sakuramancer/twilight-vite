import { useState } from "react";
import { useDocumentTitle } from "core/hooks";
import { GameMenu } from "core/ui";
import { MecatolMain } from "entities/mecatol/ui";
import { Gains } from "entities/gain/ui";
import { MagnifierButton } from "features/objective/gameplay";
import { LeaderBackground, PointCounter } from "features/score/ui";
import { PointTable } from "widgets/gameplay-table";
import { Objectives } from "widgets/objectives";
import classes from "./GamePage.module.css";

const GamePage = () => {
  useDocumentTitle("Партия | Сумерки");
  const [magnifierActive, setMagnifierActive] = useState(false);

  return (
    <div className={classes.main}>
      <LeaderBackground />
      <GameMenu className={classes.menu} />
      <MagnifierButton
        className={classes.magnifier}
        isActive={magnifierActive}
        onToggle={setMagnifierActive}
      />
      <PointCounter className={classes.pointCounter} />
      <PointTable className={classes.pointTable} />
      <MecatolMain className={classes.mecatol} />
      <Gains className={classes.gains} />
      <Objectives
        className={classes.objectives}
        magnifierActive={magnifierActive}
      />
    </div>
  );
};

export { GamePage };
