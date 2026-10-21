import { Halftone } from "@/components/stage/halftone";
import { notch, type Point } from "@/components/stage/path";

const SPINE: Point = [198, 300];

const LEFT_COVER: Point[] = [
  [198, 132],
  [132, 118],
  [58, 162],
  [28, 248],
  [36, 348],
  [72, 430],
  [140, 468],
  [198, 430],
];

const RIGHT_COVER: Point[] = [
  [206, 140],
  [270, 112],
  [346, 148],
  [388, 230],
  [376, 340],
  [328, 420],
  [252, 456],
  [206, 400],
];

const LEFT_PATH = notch(LEFT_COVER, SPINE, 0.28);
const RIGHT_PATH = notch(RIGHT_COVER, SPINE, 0.3);

export function BookCut() {
  return (
    <svg viewBox="0 0 400 520" className="poster" aria-hidden="true">
      <defs>
        <Halftone id="ht-book" />
      </defs>
      <ellipse cx="200" cy="470" rx="150" ry="24" fill="url(#ht-book)" opacity="0.4" />
      <g transform="rotate(-7 200 290)">
        <path d={RIGHT_PATH} fill="var(--accent)" />
        <path d={RIGHT_PATH} fill="url(#ht-book)" opacity="0.26" />
        <path d={LEFT_PATH} fill="var(--ink)" />
        <path
          d="M118 196h74v196H108z"
          fill="var(--sheet)"
          stroke="var(--ink)"
          strokeWidth="3"
        />
        <path
          d="M206 188h86v188H198z"
          fill="var(--sheet)"
          stroke="var(--ink)"
          strokeWidth="3"
        />
        <path d="M196 168v250" stroke="var(--ink)" strokeWidth="8" strokeLinecap="round" />
        <path
          d="M132 224h48M130 246h52M128 268h46M126 290h50M124 312h44"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M218 220h58M220 242h60M222 264h54M224 286h58M226 308h50"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path d="M236 150l18 8 2 132-16 18-14-16 2-130z" fill="var(--ink)" />
      </g>
    </svg>
  );
}
