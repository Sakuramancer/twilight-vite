const NullComponent = () => null;

export function resolveSlot(slot) {
  const {
    Canvas = NullComponent,
    Content = NullComponent,
    props = {},
  } = slot ?? {};

  return { Canvas, Content, props };
}
