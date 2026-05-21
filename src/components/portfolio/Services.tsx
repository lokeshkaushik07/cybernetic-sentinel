import { Section } from "./Section";
import {
  Radar,
  ShieldAlert,
  ScanSearch,
  CloudCog,
  Search,
  FileCheck2,
  Bot,
} from "lucide-react";

const services = [
  {
    icon: Radar,
    title: "SOC Log Monitoring",
    desc: "Continuous review of security events across endpoints, network, and cloud sources.",
  },
  {
    icon: ShieldAlert,
    title: "Threat Detection & Analysis",
    desc: "Triage suspicious activity, enrich indicators, and surface actionable detections.",
  },
  {
    icon: ScanSearch,
    title: "Vulnerability Assessment",
    desc: "Scan, prioritize, and report on weaknesses across infrastructure and applications.",
  },
  {
    icon: CloudCog,
    title: "Cloud Security Monitoring",
    desc: "Posture management and runtime visibility on AWS and Azure workloads.",
  },
  {
    icon: Search,
    title: "Security Event Investigation",
    desc: "Deep-dive into incidents with packet captures, timelines, and root-cause analysis.",
  },
  {
    icon: FileCheck2,
    title: "Compliance-Oriented Practices",
    desc: "Align operations with NIST CSF, ISO 27001, SOC 2, and PCI-DSS expectations.",
  },
  {
    icon: Bot,
    title: "Security Automation Scripts",
    desc: "Python and Bash tooling to eliminate repetitive triage and reporting work.",
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="// services"
      title={<>What I can <span className="text-gradient">defend</span> for you</>}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/10"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/25 to-purple-500/25 text-cyan-300 transition group-hover:glow-cyan">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <div className="mt-5 flex items-center gap-1 font-mono text-[11px] text-cyan-300 opacity-0 transition group-hover:opacity-100">
              <span className="h-1 w-1 rounded-full bg-cyan-400 animate-pulse-glow" />
              operational
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
