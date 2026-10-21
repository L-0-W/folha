export type Point = [number, number];

export function notch(
  points: readonly Point[],
  anchor: Point,
  pinch: number,
): string {
  const [x0, y0] = points[0];
  let path = `M ${x0.toFixed(1)} ${y0.toFixed(1)}`;

  for (let index = 1; index < points.length; index += 1) {
    const [x1, y1] = points[index - 1];
    const [x2, y2] = points[index];
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const cx = mx + (anchor[0] - mx) * pinch;
    const cy = my + (anchor[1] - my) * pinch;
    path += ` Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  }

  return `${path} Z`;
}
