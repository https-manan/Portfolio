const links = [
  { label: "Work", href: "#work" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="px-2.5 py-1 font-mono text-lg font-bold text-black md:text-2xl">
          Manan
        </a>
        <ul className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-ink transition-opacity hover:opacity-60">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/https-manan"
              target="_blank"
              rel="noreferrer"
              className="text-ink transition-opacity hover:opacity-60"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
} 