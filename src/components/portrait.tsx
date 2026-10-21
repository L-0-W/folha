import Image from "next/image";

type PortraitProps = {
  initials: string;
  src: string | null;
};

export function Portrait({ initials, src }: PortraitProps) {
  return (
    <div className="portrait">
      {src ? (
        <Image
          src={src}
          alt=""
          width={64}
          height={64}
          priority
          className="portrait-photo"
        />
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </div>
  );
}
