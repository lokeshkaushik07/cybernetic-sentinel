import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 font-bold text-background">
            LK
          </span>
          <div>
            <div className="font-semibold">Lokesh Kaushik</div>
            <div className="font-mono text-xs text-muted-foreground">
              // securing the perimeter, one alert at a time
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/Lokeshkaushik07" target="_blank" rel="noreferrer" className="glass rounded-full p-2.5 transition hover:bg-white/10 hover:text-cyan-300" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/lokeshkaushik07/" target="_blank" rel="noreferrer" className="glass rounded-full p-2.5 transition hover:bg-white/10 hover:text-cyan-300" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:ilokeshkaushik@gmail.com" className="glass rounded-full p-2.5 transition hover:bg-white/10 hover:text-cyan-300" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lokesh Kaushik · All rights reserved
        </div>
      </div>
    </footer>
  );
}
