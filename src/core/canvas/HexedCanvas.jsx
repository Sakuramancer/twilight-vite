import HexPath from "./HexPath";
import ExtendedHexPath from "./ExtendeHexPath";
import RelicPath from "./RelicPath";
import PetalPath from "./PetalPath";
import FlowerPath from "./FlowerPath";
import LeafPath from "./LeafPath";
import ColorWheel from "./ColorWheel";
import ColorLine from "./ColorLine";
import ColorHexes from "./ColorHexes";
import PlusPath from "./PlusPath";
import CheckPath from "./CheckPath";
import MagnifierPath from "./MagnifierPath";
import BurgerPath from "./BurgerPath";
import EyePath from "./EyePath";
import StripesPattern from "./StripesPattern";
import FramePath from "./FramePath";
import DicePath from "./DicePath";
import { HexedCanvasContext } from "./HexedCanvasContext";

const HexedCanvas = ({ className, geometry, children, ...props }) => {
  const { width, height } = geometry;
  const viewbox = `0 0 ${width} ${height}`;

  return (
    <HexedCanvasContext.Provider value={geometry}>
      <svg
        {...props}
        className={className}
        viewBox={viewbox}
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </HexedCanvasContext.Provider>
  );
};

HexedCanvas.Hex = HexPath;
HexedCanvas.ExtendedHex = ExtendedHexPath;
HexedCanvas.Frame = FramePath;
HexedCanvas.Relic = RelicPath;
HexedCanvas.Petal = PetalPath;
HexedCanvas.Flower = FlowerPath;
HexedCanvas.Leaf = LeafPath;
HexedCanvas.ColorWheel = ColorWheel;
HexedCanvas.ColorLine = ColorLine;

HexedCanvas.ColorHexes = ColorHexes;

HexedCanvas.Plus = PlusPath;
HexedCanvas.Check = CheckPath;
HexedCanvas.Magnifier = MagnifierPath;
HexedCanvas.Burger = BurgerPath;
HexedCanvas.Eye = EyePath;
HexedCanvas.Dice = DicePath;

HexedCanvas.StripesPattern = StripesPattern;

export default HexedCanvas;
