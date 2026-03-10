const anchorSize = 95;
const frameHeight = 1200;
const centerX = 1.05 * anchorSize;
const centerY = 1.1 * anchorSize;

export const compactGeometry = {
  width: 10 * anchorSize,
  height: 2 * centerY,
  anchorPoint: { x: centerX, y: centerY },
  anchorSize,
};

export const cardGeometry = {
  width: 10 * anchorSize,
  height: frameHeight,
  anchorPoint: { x: centerX, y: centerY },
  anchorSize,
};
