import { craftMarkLabel, type CraftMark } from "@/content/portfolio";
import type { ReactNode } from "react";

function Stroke({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  );
}

function line(d: string) {
  return (
    <path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

const icons: Record<CraftMark, () => ReactNode> = {
  tipo: () => (
    <Stroke>
      {line("M4.5 6.5h15M12 6.5v12M8 18.5h8")}
    </Stroke>
  ),
  grade: () => (
    <Stroke>
      {line("M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z")}
    </Stroke>
  ),
  cor: () => (
    <Stroke>
      <path
        d="M12 4.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M12 4.8a7.2 7.2 0 0 1 0 14.4Z" fill="currentColor" />
    </Stroke>
  ),
  papel: () => (
    <Stroke>
      {line("M7 4.5h7l4 4V19.5H7zM14 4.8V9h4.2")}
    </Stroke>
  ),
  movimento: () => (
    <Stroke>
      {line("M4.5 15c3-6 8-6 11 0M8 8.5 4.5 15 9 16.2M19.5 9c-3 6-8 6-11 0")}
    </Stroke>
  ),
  prova: () => (
    <Stroke>
      {line("M6 5.5h12v13H6zM8.5 12.2 11 14.6 15.5 9.5")}
    </Stroke>
  ),
  voz: () => (
    <Stroke>
      {line("M6 8.5h6.5L17 5.5v13l-4.5-3H6z")}
    </Stroke>
  ),
  medida: () => (
    <Stroke>
      {line("M4.5 16.5 16.5 4.5l3 3L7.5 19.5zM8 13.2l1.6 1.6M11 10.2l1.6 1.6M14 7.2l1.6 1.6")}
    </Stroke>
  ),
};

export function CraftMarks({ marks }: { marks: readonly CraftMark[] }) {
  return (
    <>
      <p className="sr-only">
        Ofício: {marks.map((mark) => craftMarkLabel[mark]).join(", ")}.
      </p>
      <ul className="marks" aria-hidden="true">
        {marks.map((mark) => {
          const Icon = icons[mark];
          return (
            <li className="mark" key={mark}>
              <Icon />
            </li>
          );
        })}
      </ul>
    </>
  );
}
