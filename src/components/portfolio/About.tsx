import { Section } from "./Section";
import { Brain, Cloud, Eye, FileCheck2, Lock, Workflow } from "lucide-react";

const strengths = [
  { icon: Brain, label: "Threat Analysis & Detection" },
  { icon: Cloud, label: "Cloud Security" },
  { icon: FileCheck2, label: "Governance, Risk & Compliance" },
  { icon: Eye, label: "Security Monitoring" },
  { icon: Workflow, label: "Security Automation" },
  { icon: Lock, label: "Vulnerability Management" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="// about"
      title={<>The mind behind the <span className="text-gradient">monitor</span></>}
    >
      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div className="glass-strong rounded-3xl p-8 md:p-10">
          <p className="text-lg leading-relaxed text-foreground/90">
            I'm a <span className="text-cyan-300">cybersecurity enthusiast</span> specializing
            in defending modern digital landscapes. From analyzing traffic in a
            SOC environment to securing cloud infrastructure and aligning systems
            with GRC frameworks, I enjoy solving complex security challenges.
          </p>
          <p className="mt-4 text-muted-foreground">
            My approach blends an analytical mindset with hands-on tooling — I
            study the anatomy of every alert, instrument what can be measured,
            and treat compliance as code, not paperwork. Continuous learning is
            the only real perimeter that lasts.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 font-mono text-xs">
            <div>
              <div className="text-muted-foreground">LOCATION</div>
              <div className="mt-1 text-foreground">Chandigarh, IN</div>
            </div>
            <div>
              <div className="text-muted-foreground">FOCUS</div>
              <div className="mt-1 text-foreground">SOC · Cloud · GRC</div>
            </div>
            <div>
              <div className="text-muted-foreground">STATUS</div>
              <div className="mt-1 text-cyan-300">Active learner</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
          {strengths.map((s) => (
            <div
              key={s.label}
              className="glass group rounded-2xl p-4 transition hover:bg-white/10"
            >
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-500/20 text-cyan-300 transition group-hover:scale-110">
                <s.icon className="h-4 w-4" />
              </div>
              <div className="mt-3 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
