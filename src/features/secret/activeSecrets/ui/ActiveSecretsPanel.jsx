import { useStore } from "core/store/StoreContext";
import Overlay from "core/ui/Overlay";
import ScrollToTop from "core/ui/ScrollToTop";
import { GoalCard } from "entities/goal/ui";
import { secretSelectors } from "entities/secret/model";
import classes from "./ActiveSecretsPanel.module.css";

const ActiveSecretsPanel = ({ onDiscard }) => {
  const secrets = useStore(secretSelectors.selectForCurrentScreen);

  return (
    <Overlay
      className={classes.container}
      containerId="secrets"
      onDiscard={onDiscard}
      onConfirm={onDiscard}
      discardOnClickIn={true}
      withScroll={true}
    >
      <div className={classes.main}>
        <div className={classes.header}>Секреты</div>
        <div className={classes.table}>
          {secrets.map(({ colorId, playerSecrets }, pIndex) => (
            <div key={pIndex} className={classes.column}>
              {playerSecrets.map((cardId, sIndex) => (
                <GoalCard
                  key={sIndex}
                  variant="secret"
                  cardId={cardId}
                  colorId={colorId}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Overlay>
  );
};

export { ActiveSecretsPanel };
