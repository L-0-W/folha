"use client";

import type { InlinePart } from "@/content/portfolio";
import { anchorProps, guardPlaceholder } from "@/lib/links";

export function InlineText({ parts }: { parts: InlinePart[] }) {
  return parts.map((part, index) => {
    if (!part.href) return part.text;

    const className = part.badge ? "badge" : undefined;

    return (
      <a
        key={`${part.text}-${index}`}
        href={part.href}
        className={className}
        {...anchorProps(part.href)}
        onClick={(event) => guardPlaceholder(event, part.href ?? "#")}
      >
        {part.text}
      </a>
    );
  });
}
