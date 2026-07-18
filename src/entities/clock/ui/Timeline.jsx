import { useStore } from "shared/store";
import { buttonGeometry, HexedCanvas } from "shared/ui";
import { clockSelectors } from "../model";
import { ScrollContainer } from "./ScrollContainer";
import { TimelineMark } from "./TimelineMark";
import classes from "./Timeline.module.css";

const Timeline = ({ showOffset }) => {
  const timeline = useStore(clockSelectors.selectClocks);

  return (
    <ScrollContainer className={classes.main} trigger={timeline.length}>
      {timeline.map((mark, index, marks) => {
        const markBefore = index > 0 ? marks[index - 1] : undefined;
        return (
          <div className={classes.block} key={index}>
            {index !== 0 && (
              <HexedCanvas className={classes.canvas} geometry={buttonGeometry}>
                <HexedCanvas.Hex className={classes.hex} sitOnEdge={true} />
              </HexedCanvas>
            )}
            <TimelineMark
              index={index}
              mark={mark}
              markBefore={markBefore}
              showOffset={showOffset}
            />
          </div>
        );
      })}
    </ScrollContainer>
  );
};

export { Timeline };
