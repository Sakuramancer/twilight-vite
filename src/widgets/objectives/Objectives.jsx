import { useState } from "react";
import classNames from "classnames/bind";
import { useStore } from "shared/store";
import { plusOneVisible } from "shared/lib";
import { getObjectiveCommands, objectiveSelectors } from "entities/objective";
import { ObjectiveFlower } from "features/objective/gameplay";
import { SelectObjectivePanel } from "features/objective/selectObjective";
import classes from "./Objectives.module.css";

const cx = classNames.bind(classes);

const Objectives = ({ className }) => {
  const commands = getObjectiveCommands();
  const objectives = useStore(objectiveSelectors.selectObjectives);
  const data = plusOneVisible(objectives, (objective) => objective.cardId);

  const [cardIndex, setCardIndex] = useState(-1);

  const cardSelectedHandler = (cardId) => {
    const currentIndex = cardIndex;
    commands.addNewObjective(currentIndex, cardId);
    setCardIndex(-1);
  };

  const filters =
    cardIndex >= 5
      ? { stage1: false, stage2: true, secret: false }
      : { stage1: true, stage2: false, secret: false };

  const mainClass = cx({
    [className]: true,
    main: true,
    showThree: data.length <= 4,
    showFive: data.length > 4 && data.length <= 6,
    showAll: data.length > 6,
  });
  return (
    <>
      <div className={mainClass}>
        {data.map((_, index) => (
          <ObjectiveFlower
            key={index}
            cardIndex={index}
            onSelectCard={(index) => setCardIndex(index)}
          />
        ))}
      </div>
      {cardIndex >= 0 && (
        <SelectObjectivePanel
          filters={filters}
          onDiscard={() => setCardIndex(-1)}
          onConfirm={cardSelectedHandler}
        />
      )}
    </>
  );
};

export { Objectives };
