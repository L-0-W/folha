"use client";

import { socialLinks } from "@/content/portfolio";
import { socialIcons } from "@/components/icons";
import { anchorProps, guardPlaceholder } from "@/lib/links";

export function SocialLinks() {
  return (
    <ul className="social">
      {socialLinks.map((link) => {
        const Icon = socialIcons[link.icon];
        return (
          <li key={link.label}>
            <a
              href={link.href}
              aria-label={link.label}
              {...anchorProps(link.href)}
              onClick={(event) => guardPlaceholder(event, link.href)}
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
