import { useStore } from "shared/store";
import { Overlay } from "shared/ui";
import { GoalCard } from "entities/goal";
import { selectors } from "../model/selectors";
import classes from "./ActiveSecretsPanel.module.css";

const ActiveSecretsPanel = ({ onDiscard }) => {
  const secrets = useStore(selectors.selectSecrets);

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
