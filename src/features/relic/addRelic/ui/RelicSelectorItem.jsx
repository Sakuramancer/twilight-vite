import { useStore } from "core/store/StoreContext";
import HexedCanvas from "core/canvas/HexedCanvas";
import { getExpansionLabel, relicSelectors } from "entities/relic/model";
import {
  FrameHex,
  PointHex,
  RelicView,
  TitleHex,
  cardGeometry,
} from "entities/relic/ui";
import { DiceHex } from "./DiceHex";
import classes from "./RelicSelectorItem.module.css";

const RelicSelectorItem = ({
  relicId,
  availableForRandom,
  toggleAvailableForRandom,
  setRelicSelected,
}) => {
  const { static: relicStatic } = useStore(relicSelectors.makeRelic(relicId));

  const { title, description, havePoint, expansion } = relicStatic;
  const label = getExpansionLabel(expansion);

  const onDiceClick = () => toggleAvailableForRandom(relicId);
  const muted = !availableForRandom;
  const onCardClick = () => setRelicSelected(relicId);

  return (
    <div className={classes.main}>
      <RelicView
        geometry={cardGeometry}
        TitleSlot={{
          ...TitleHex,
          props: {
            title: title.value,
            centered: false,
            muted,
            redpainted: false,
            onClick: onCardClick,
          },
        }}
        PlayerSlot={{
          ...DiceHex,
          props: {
            muted,
            onClick: onDiceClick,
          },
        }}
        PointSlot={
          havePoint
            ? {
                ...PointHex,
                props: {
                  colored: false,
                },
              }
            : {}
        }
        FrameSlot={{
          ...FrameHex,
          props: {
            description: description.value,
            label,
            muted,
            onClick: onCardClick,
          },
        }}
      />
    </div>
  );
};

export { RelicSelectorItem };
