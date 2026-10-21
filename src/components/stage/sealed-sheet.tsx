import { Halftone } from "@/components/stage/halftone";
import { notch, type Point } from "@/components/stage/path";

const SHEET: Point[] = [
  [86, 124],
  [124, 70],
  [170, 116],
  [214, 62],
  [260, 112],
  [312, 68],
  [356, 128],
  [372, 214],
  [348, 304],
  [374, 392],
  [332, 470],
  [210, 498],
  [92, 468],
  [54, 376],
  [78, 286],
  [48, 196],
];

const SHEET_PATH = notch(SHEET, [210, 280], 0.2);

export function SealedSheet() {
  return (
    <svg viewBox="0 0 400 520" className="poster" aria-hidden="true">
      <defs>
        <Halftone id="ht-seal" />
      </defs>
      <g transform="rotate(-6 210 280)">
        <path d={SHEET_PATH} fill="var(--accent)" transform="translate(22 20)" />
        <path
          d={SHEET_PATH}
          fill="url(#ht-seal)"
          opacity="0.32"
          transform="translate(22 20)"
        />
        <path d={SHEET_PATH} fill="var(--ink)" />
        <path
          d="M118 168 L196 214 L308 156"
          fill="none"
          stroke="var(--sheet)"
          strokeWidth="2"
          opacity="0.45"
        />
        <path
          d="M104 300h168M100 328h150"
          fill="none"
          stroke="var(--sheet)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.35"
        />
      </g>
      <text
        x="188"
        y="318"
        textAnchor="middle"
        fill="var(--sheet)"
        fontSize="168"
        fontWeight="560"
        style={{ fontFamily: "var(--display), Georgia, serif" }}
      >
        ?
      </text>
      <g transform="translate(286 392)">
        <circle r="38" fill="var(--accent)" />
        <circle r="38" fill="url(#ht-seal)" opacity="0.35" />
        <circle r="28" fill="none" stroke="var(--sheet)" strokeWidth="2" />
        <circle r="7" fill="var(--sheet)" />
      </g>
    </svg>
  );
}
