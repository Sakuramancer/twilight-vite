import { useDocumentTitle } from "shared/lib";
import { LinkButton, buttons } from "shared/ui";
import classes from "./HomePage.module.css";

const HomePage = () => {
  useDocumentTitle("Трекер Сумерек");
  return (
    <div className={classes.total}>
      <div className={classes.main}>
        <h1>Трекер Сумерек</h1>
        <div className={classes.subtitle}>
          Сайт-помощник для игры Twilight Imperium™ 4th edition
        </div>
        <LinkButton to="/game" className={buttons.green}>
          Продолжить игру
        </LinkButton>
        <div className={classes.margin}></div>
        <LinkButton to="/newGame">Новая игра</LinkButton>
        <div className={classes.footer}>
          <div className={classes.warning}>
            This is an unofficial fan-made project and is not affiliated with,
            endorsed by, sponsored by, or approved by Fantasy Flight Games or
            Asmodee.
          </div>
          <div className={classes.warning}>
            Twilight Imperium and all related trademarks and copyrights are the
            property of Fantasy Flight Games. This tool is for personal,
            non-commercial use only.
          </div>
          <div className={classes.warning}>
            Неофициальный фанатский проект. Не связан с Fantasy Flight Games,
            Asmodee или Hobby Games.
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomePage };
