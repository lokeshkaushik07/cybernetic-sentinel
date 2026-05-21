import { Section } from "./Section";
import { ShieldCheck, FileBadge, Lock, CreditCard } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    name: "NIST CSF",
    body: "Identify · Protect · Detect · Respond · Recover. Risk-based framework for measurable security maturity.",
  },
  {
    icon: FileBadge,
    name: "ISO/IEC 27001",
    body: "Information security management systems — controls, risk treatment, and continuous improvement.",
  },
  {
    icon: Lock,
    name: "SOC 2",
    body: "Trust services criteria covering security, availability, and confidentiality for SaaS providers.",
  },
  {
    icon: CreditCard,
    name: "PCI-DSS",
    body: "Payment card data protection — segmentation, access control, monitoring, and secure development.",
  },
];

export function Certs() {
  return (
    <Section
      id="certs"
      eyebrow="// frameworks"
      title={<>Standards I <span className="text-gradient">work with</span></>}
      description="The control libraries and frameworks shaping how I think about defense and compliance."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.name}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/10"
          >
            <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-purple-500/0 blur-3xl transition group-hover:bg-purple-500/30" />
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 text-cyan-300">
              <it.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{it.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>Framework</span>
              <span className="text-cyan-300">In practice</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
