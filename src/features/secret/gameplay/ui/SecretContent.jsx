import { useStore } from "shared/store";
import { playerSelectors } from "entities/player";
import { secretSelectors, SecretFlower } from "entities/secret";

const SecretContent = ({ setIndexes }) => {
  const secrets = useStore(secretSelectors.selectSecrets);
  const players = useStore(playerSelectors.selectPlayers);

  const secretFlowerHandler = (playerIndex, secretIndex) => {
    setIndexes({ playerIndex, secretIndex });
  };

  return (
    <>
      {secrets.map((playerSecrets, index) => (
        <SecretFlower
          key={index}
          playerIndex={index}
          colorId={players[index].colorId}
          playerSecrets={playerSecrets}
          clickHandler={secretFlowerHandler}
        />
      ))}
    </>
  );
};

export { SecretContent };
