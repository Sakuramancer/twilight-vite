import { useStore } from "core/store/StoreContext";
import { getExpansionLabel, relicSelectors } from "../../model";
import {
  cardGeometry,
  FrameHex,
  PlayerHex,
  PointHex,
  RelicView,
  TitleHex,
} from "../../ui";
import classes from "./LibraryCardItem.module.css";

const LibraryCardItem = ({ relicId }) => {
  const { static: relicStatic } = useStore(relicSelectors.makeRelic(relicId));

  const { title, havePoint, description, expansion } = relicStatic;
  const label = getExpansionLabel(expansion);

  return (
    <div className={classes.main}>
      <RelicView
        geometry={cardGeometry}
        TitleSlot={{
          ...TitleHex,
          props: {
            title: title.value,
            centered: true,
            muted: false,
            redpainted: false,
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
            muted: false,
          },
        }}
      />
    </div>
  );
};

export default LibraryCardItem;
