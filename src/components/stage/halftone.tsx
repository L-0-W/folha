export function Halftone({ id }: { id: string }) {
  return (
    <pattern id={id} width="8" height="8" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.25" fill="var(--ink)" />
    </pattern>
  );
}
