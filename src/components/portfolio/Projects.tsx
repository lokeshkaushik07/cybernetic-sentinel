import { Section } from "./Section";
import { Mail, FileText, Award, Terminal } from "lucide-react";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="// projects & research"
      title={<>Selected <span className="text-gradient">work</span></>}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Project 1 */}
        <article className="glass-strong group relative overflow-hidden rounded-3xl p-6 md:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 text-cyan-300">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Project · 01
                </div>
                <h3 className="text-lg font-semibold">Email Phishing Analysis Tool</h3>
              </div>
            </div>
            <span className="glass rounded-full px-3 py-1 font-mono text-[11px] text-cyan-300">
              Python
            </span>
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/40 font-mono text-xs">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-2 text-muted-foreground">phish-analyzer.py</span>
            </div>
            <div className="space-y-1 p-3 text-cyan-200/90">
              <div><span className="text-purple-300">$</span> python phish-analyzer.py invoice.eml</div>
              <div className="text-muted-foreground">[+] Parsing headers · SPF=fail · DKIM=none</div>
              <div className="text-muted-foreground">[+] Extracted 3 URLs · resolving against VirusTotal</div>
              <div className="text-red-300">[!] Malicious domain detected: secure-login.xyz</div>
              <div className="text-cyan-300">[✓] IOC report written to ./reports/2025-05.json</div>
            </div>
          </div>

          <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
            <li>· Inspects email headers, URLs, and sender metadata</li>
            <li>· Extracts indicators of compromise (IOCs)</li>
            <li>· Verifies malicious domains/IPs via threat-intel APIs</li>
          </ul>
        </article>

        {/* Project 2 */}
        <article className="glass-strong group relative overflow-hidden rounded-3xl p-6 md:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-400/20 text-purple-300">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Research · 02
                </div>
                <h3 className="text-lg font-semibold">
                  A Lightweight Tool to Monitor Configuration File Changes
                </h3>
              </div>
            </div>
            <span className="glass inline-flex items-center gap-1 rounded-full px-3 py-1 font-mono text-[11px] text-purple-300">
              <Award className="h-3 w-3" /> Best Paper
            </span>
          </div>

          <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              ISCCSC 2025 · Best Paper Abstract
            </div>
            <p className="mt-2 text-sm text-foreground/90">
              A research-focused, lightweight monitoring solution that watches
              critical configuration files for unauthorized change — designed
              for low-resource environments where heavy FIM agents aren't viable.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 text-center">
            {[
              { k: "Integrity", v: "SHA-256" },
              { k: "Footprint", v: "< 8 MB" },
              { k: "Alerts", v: "Realtime" },
            ].map((m) => (
              <div key={m.k} className="glass rounded-xl py-3">
                <div className="font-mono text-[10px] uppercase text-muted-foreground">{m.k}</div>
                <div className="text-sm font-semibold text-cyan-300">{m.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Terminal className="h-3.5 w-3.5" /> system-integrity · file-monitor · research
          </div>
        </article>
      </div>
    </Section>
  );
}
