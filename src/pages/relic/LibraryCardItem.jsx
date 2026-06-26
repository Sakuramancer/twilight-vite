import { useStore } from "shared/store";
import {
  getExpansionLabel,
  relicSelectors,
  cardGeometry,
  FrameHex,
  PointHex,
  RelicView,
  TitleHex,
} from "entities/relic";
import classes from "./LibraryCardItem.module.css";

const LibraryCardItem = ({ relicId }) => {
  const { meta } = useStore(relicSelectors.makeRelic(relicId));

  const { title, havePoint, description, expansion } = meta;
  const label = getExpansionLabel(expansion);

  return (
    <div className={classes.main}>
      <RelicView
        geometry={cardGeometry}
        TitleSlot={{
          ...TitleHex,
          props: {
            title: title.value,
            titleVisible: true,
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
