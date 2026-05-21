import { Section } from "./Section";
import {
  Activity,
  Cloud,
  ClipboardCheck,
  Workflow,
  BookOpen,
  Terminal,
} from "lucide-react";

const groups = [
  {
    icon: Activity,
    title: "Security Operations & Threat Analytics",
    skills: [
      { name: "Splunk (SIEM)", level: 82 },
      { name: "Nessus", level: 75 },
      { name: "Wireshark", level: 78 },
    ],
  },
  {
    icon: Cloud,
    title: "Application & Cloud Security",
    skills: [
      { name: "Burp Suite", level: 72 },
      { name: "AWS Security Hub", level: 70 },
      { name: "Microsoft Defender for Cloud", level: 68 },
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Governance, Risk & Compliance",
    skills: [
      { name: "ServiceNow GRC", level: 70 },
      { name: "RSA Archer", level: 65 },
      { name: "AuditBoard", level: 62 },
    ],
  },
  {
    icon: Workflow,
    title: "Compliance Automation",
    skills: [
      { name: "Drata", level: 68 },
      { name: "Vanta", level: 66 },
      { name: "Notion / Excel", level: 88 },
    ],
  },
  {
    icon: BookOpen,
    title: "Frameworks & Standards",
    skills: [
      { name: "NIST CSF", level: 80 },
      { name: "ISO/IEC 27001", level: 78 },
      { name: "SOC 2 · PCI-DSS", level: 72 },
    ],
  },
  {
    icon: Terminal,
    title: "Automation & Scripting",
    skills: [
      { name: "Python", level: 80 },
      { name: "Bash Scripting", level: 75 },
      { name: "Linux / Unix CLI", level: 82 },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="// skills"
      title={<>Tooling, <span className="text-gradient">in production</span></>}
      description="A working stack across detection, cloud, compliance, and automation."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div
            key={g.title}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:bg-white/10"
          >
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-cyan-400/0 blur-2xl transition group-hover:bg-cyan-400/25" />
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 text-cyan-300">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{g.title}</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {g.skills.map((s) => (
                <li key={s.name}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-foreground/80">{s.name}</span>
                    <span className="font-mono text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
