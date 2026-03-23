import classNames from "classnames/bind";
import { useStore } from "core/store";
import { plural } from "core/utils";
import { RelicPreviewItem } from "./RelicPreviewItem";
import RelicPlayerSelector from "./RelicPlayerSelector";
import RandomRelicButton from "./RandomRelicButton";
import buttons from "core/styles/buttons.module.css";
import classes from "./RelicSelectColumn.module.css";

const cx = classNames.bind(classes);

const deckWords = ["карта", "карты", "карт"];

const RelicSelectColumn = ({
  className,
  relicSelected,
  playerSelected,
  setPlayerSelected,
  readyToAdd,
  randomSize,
  onRandom,
  onConfirm,
}) => {
  const colorId = useStore(
    (s) => s.colors[playerSelected]?.colorId ?? "_default",
  );

  const buttonClass = cx({
    button: true,
    "button-enabled": readyToAdd,
    [buttons.green]: readyToAdd,
    [buttons.grey]: !readyToAdd,
  });

  return (
    <div className={className}>
      <div>
        <RelicPreviewItem
          relicId={relicSelected}
          playerIndex={playerSelected}
          colorId={colorId}
        />
        <div className={classes.label}>или</div>
        <RandomRelicButton className={classes.random} onClick={onRandom} />
        <div
          className={classes.deckLabel}
        >{`${randomSize} ${plural(randomSize, deckWords)} в колоде`}</div>
      </div>
      <div>
        <div className={classes.label}>ВЫБЕРИТЕ ЦВЕТ:</div>
        <RelicPlayerSelector
          playerSelected={playerSelected}
          setPlayerSelected={setPlayerSelected}
          colorId={colorId}
        />
      </div>
      <div className={buttonClass} onClick={onConfirm}>
        Добавить
      </div>
    </div>
  );
};

export default RelicSelectColumn;
