import { useStore } from "core/store";
import SecretFlower from "./SecretFlower";

const SecretContent = ({ setIndexes }) => {
  const secrets = useStore((s) => s.secrets);
  const colors = useStore((s) => s.colors);

  const secretFlowerHandler = (playerIndex, secretIndex) => {
    setIndexes({ playerIndex, secretIndex });
  };

  return (
    <>
      {secrets.map((playerSecrets, index) => (
        <SecretFlower
          key={index}
          playerIndex={index}
          colorId={colors[index].colorId}
          playerSecrets={playerSecrets}
          clickHandler={secretFlowerHandler}
        />
      ))}
    </>
  );
};

export { SecretContent };
