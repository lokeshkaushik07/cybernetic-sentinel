import { Section } from "./Section";
import { Activity, Cloud, Bug, Eye, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "SOC Monitoring Practice",
    desc: "Hands-on log review using Splunk and open-source SIEM datasets; built detection logic for common attacker TTPs.",
    tag: "SIEM · Detection",
  },
  {
    icon: Cloud,
    title: "Cloud Security Experimentation",
    desc: "Configured AWS Security Hub and Microsoft Defender for Cloud across lab environments to study misconfiguration patterns.",
    tag: "AWS · Azure",
  },
  {
    icon: Bug,
    title: "Vulnerability Management",
    desc: "Authenticated and unauthenticated scans with Nessus, prioritization workflows, and remediation tracking.",
    tag: "Nessus · CVSS",
  },
  {
    icon: Activity,
    title: "Threat Analysis Simulations",
    desc: "Recreated phishing and lateral-movement scenarios in isolated labs to practice analyst response.",
    tag: "Purple-team",
  },
  {
    icon: ShieldCheck,
    title: "Academic Security Projects",
    desc: "Security-focused course projects in cryptography, web app security, and network defense.",
    tag: "Coursework",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="// experience"
      title={<>Hands-on <span className="text-gradient">security work</span></>}
      description="No formal title yet — but the muscle memory is real. Here's where I've been training."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((i) => (
          <div
            key={i.title}
            className="glass group flex items-start gap-4 rounded-2xl p-5 transition hover:bg-white/10"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 text-cyan-300">
              <i.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold">{i.title}</h3>
                <span className="glass rounded-full px-2 py-0.5 font-mono text-[10px] text-cyan-300">
                  {i.tag}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
