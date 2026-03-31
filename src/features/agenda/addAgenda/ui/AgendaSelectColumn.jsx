import classNames from "classnames/bind";
import { SearchField } from "core/ui";
import { plural } from "core/utils";
import { AgendaPreviewItem } from "./AgendaPreviewItem";
import RandomAgendaButton from "./RandomAgendaButton";
import buttons from "core/styles/buttons.module.css";
import classes from "./AgendaSelectColumn.module.css";

const cx = classNames.bind(classes);

const deckWords = ["карта", "карты", "карт"];

const AgendaSelectColumn = ({
  className,
  agendaSelected,
  readyToAdd,
  randomSize,
  onRandom,
  onConfirm,
  searchValue,
  setSearchValue,
}) => {
  const clearSearchHandler = () => setSearchValue("");

  const buttonClass = cx({
    button: true,
    "button-enabled": readyToAdd,
    [buttons.green]: readyToAdd,
    [buttons.grey]: !readyToAdd,
  });

  return (
    <div className={className}>
      <SearchField
        aria-label="Поиск политик"
        value={searchValue}
        onChange={setSearchValue}
        onClear={clearSearchHandler}
      />
      <div>
        <AgendaPreviewItem agendaId={agendaSelected} />
        <div className={classes.label}>или</div>
        <RandomAgendaButton className={classes.random} onClick={onRandom} />
        <div
          className={classes.deckLabel}
        >{`${randomSize} ${plural(randomSize, deckWords)} в колоде`}</div>
      </div>
      <div className={buttonClass} onClick={onConfirm}>
        Добавить
      </div>
    </div>
  );
};

export default AgendaSelectColumn;
