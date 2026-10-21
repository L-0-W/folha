import { InlineText } from "@/components/inline-text";
import { Portrait } from "@/components/portrait";
import { PressWing } from "@/components/stage/press-wing";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/content/portfolio";

export function Intro() {
  return (
    <header className="intro plate-hero mast">
      <div className="poster-slot">
        <PressWing />
        <div className="mast-seal">
          <Portrait initials={profile.initials} src={profile.portraitSrc} />
        </div>
      </div>
      <div className="plate-copy">
        <p className="mast-kicker">{profile.kicker}</p>
        <ul className="stickers" aria-label="Ofício">
          {profile.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="bio">
          {profile.paragraphs.map((paragraph, index) => (
            <p key={index}>
              <InlineText parts={paragraph} />
            </p>
          ))}
        </div>
        <div className="plate-foot">
          <p className="mast-trade">{profile.trade}</p>
          <h1 className="plate-name">{profile.name}</h1>
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
