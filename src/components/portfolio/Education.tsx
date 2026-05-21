import { Section } from "./Section";
import { GraduationCap, Shield } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    period: "2023 — 2027",
    title: "B.E. Computer Science & Engineering",
    org: "Expected Graduation · 2027",
    body: "Foundational coursework across systems, networks, and software engineering, with self-directed deep dives into security architecture and operations.",
  },
  {
    icon: Shield,
    period: "Last 12 months",
    title: "Cybersecurity Specialization",
    org: "Self-directed track",
    body: "Hands-on work in SIEM analysis, cloud security posture, GRC tooling, and offensive web security — turning theory into deployable skill.",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="// education"
      title={<>A timeline of <span className="text-gradient">curiosity</span></>}
    >
      <div className="relative pl-6 md:pl-10">
        <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-purple-500/40 to-transparent md:left-4" />
        <div className="space-y-6">
          {items.map((it) => (
            <div key={it.title} className="relative">
              <div className="absolute -left-[1.35rem] top-6 grid h-5 w-5 place-items-center rounded-full bg-background md:-left-[2.1rem]">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 glow-cyan" />
              </div>
              <div className="glass-strong rounded-2xl p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 text-cyan-300">
                      <it.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{it.title}</h3>
                      <p className="text-sm text-muted-foreground">{it.org}</p>
                    </div>
                  </div>
                  <span className="glass shrink-0 rounded-full px-3 py-1 font-mono text-[11px] text-cyan-300">
                    {it.period}
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
