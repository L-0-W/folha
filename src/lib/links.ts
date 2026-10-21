import type { MouseEvent } from "react";

export function anchorProps(href: string): {
  target?: "_blank";
  rel?: string;
} {
  if (!href.startsWith("http")) return {};
  return { target: "_blank", rel: "noopener noreferrer" };
}

export function guardPlaceholder(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (href === "#") event.preventDefault();
}
