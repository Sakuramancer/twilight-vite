import { useState } from "react";
import classNames from "classnames/bind";
import { useStore } from "core/store/StoreContext";
import { plusOneVisible } from "core/utils/plusOneVisible";
import { getObjectiveCommands } from "entities/objective/ports";
import ObjectiveFlower from "./ObjectiveFlower";
import ObjectivesScreen from "./ObjectivesScreen";
import classes from "./Objectives.module.css";

const cx = classNames.bind(classes);

const Objectives = ({ className, magnifierActive }) => {
  const commands = getObjectiveCommands();
  const objectives = useStore((s) => s.objectives);
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
            magnifierActive={magnifierActive}
            onSelectCard={(index) => setCardIndex(index)}
          />
        ))}
      </div>
      {cardIndex >= 0 && (
        <ObjectivesScreen
          filters={filters}
          onDiscard={() => setCardIndex(-1)}
          onConfirm={cardSelectedHandler}
        />
      )}
    </>
  );
};

export { Objectives };
