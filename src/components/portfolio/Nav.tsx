import { Shield } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#certs", label: "Frameworks" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(96%,1100px)] -translate-x-1/2">
      <nav className="glass-strong flex items-center justify-between rounded-full px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 text-background">
            <Shield className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="text-gradient text-base tracking-tight">Lokesh Kaushik</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-1.5 text-sm font-medium text-background transition hover:opacity-90"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
