import { PLAYER_COUNT } from "../config/defaults";
import PetalPath from "./PetalPath";

const FlowerPath = ({ petalClasses, petalClickHandlers, ...props }) => {
  return (
    <>
      {Array.from({ length: PLAYER_COUNT }, (_, index) => {
        return (
          <PetalPath
            key={index}
            className={petalClasses[index]}
            id={index}
            playerIndex={index}
            onClick={petalClickHandlers?.[index]}
            {...props}
          />
        );
      })}
    </>
  );
};

export default FlowerPath;
