export function SiteFooter({ name, year }: { name: string; year: number }) {
  return (
    <footer className="colophon">
      <p>
        © {year} {name}.
      </p>
    </footer>
  );
}
