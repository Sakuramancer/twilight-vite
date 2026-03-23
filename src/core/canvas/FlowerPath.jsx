import { PLAYER_COUNT } from "../player/defaults";
import PetalPath from "./PetalPath";

const FlowerPath = ({ petalClasses, onPetalClick, ...props }) => {
  const getOnClick = (index) =>
    onPetalClick ? () => onPetalClick(index) : undefined;
  return (
    <>
      {Array.from({ length: PLAYER_COUNT }, (_, index) => {
        return (
          <PetalPath
            key={index}
            className={petalClasses[index]}
            id={index}
            playerIndex={index}
            onClick={getOnClick(index)}
            {...props}
          />
        );
      })}
    </>
  );
};

export default FlowerPath;
