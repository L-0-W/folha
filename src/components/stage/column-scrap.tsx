import { Halftone } from "@/components/stage/halftone";
import { notch, type Point } from "@/components/stage/path";

const COLUMN: Point[] = [
  [156, 40],
  [238, 26],
  [274, 72],
  [230, 108],
  [280, 156],
  [226, 196],
  [286, 250],
  [224, 298],
  [284, 352],
  [222, 400],
  [272, 454],
  [196, 498],
  [140, 476],
  [118, 422],
  [146, 368],
  [112, 312],
  [144, 254],
  [110, 196],
  [142, 140],
  [116, 86],
];

const COLUMN_PATH = notch(COLUMN, [190, 270], 0.22);

export function ColumnScrap() {
  return (
    <svg viewBox="0 0 400 520" className="poster" aria-hidden="true">
      <defs>
        <Halftone id="ht-column" />
      </defs>
      <g transform="rotate(-8 210 280)">
        <path d={COLUMN_PATH} fill="var(--accent)" transform="translate(26 18)" />
        <path
          d={COLUMN_PATH}
          fill="url(#ht-column)"
          opacity="0.34"
          transform="translate(26 18)"
        />
      </g>
      <g transform="rotate(4 200 270)">
        <path d={COLUMN_PATH} fill="var(--ink)" />
        <path
          d="M162 92h78M158 116h92M156 140h86"
          fill="none"
          stroke="var(--sheet)"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.85"
        />
        <rect x="158" y="162" width="54" height="66" fill="var(--sheet)" />
        <path d="M180 174h12v42h-12z" fill="var(--ink)" />
        <path
          d="M158 250h96M154 274h102M152 298h90M150 322h98M148 346h88M146 370h96M144 394h84M150 418h78"
          fill="none"
          stroke="var(--sheet)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
      </g>
    </svg>
  );
}
