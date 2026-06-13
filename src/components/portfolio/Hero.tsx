import { useEffect, useState } from "react";
import { Download, Mail, ArrowRight, Activity, Cloud, Eye, ShieldCheck } from "lucide-react";
import profile from "@/assets/profile.jpg";

const roles = [
  "SOC Analyst",
  "Cloud Security",
  "GRC Practitioner",
  "Threat Hunter",
];

function useTyping(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDel(true), 1400);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((x) => x + 1);
          }
        }
      },
      del ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

const floats = [
  { icon: Activity, label: "Threat Detection", val: "247 alerts", cls: "top-6 -left-4" },
  { icon: Cloud, label: "Cloud Security", val: "AWS · Azure", cls: "top-32 -right-6" },
  { icon: Eye, label: "SIEM Monitoring", val: "Splunk live", cls: "bottom-24 -left-8" },
  { icon: ShieldCheck, label: "GRC Compliance", val: "ISO 27001", cls: "-bottom-2 -right-2" },
];

export function Hero() {
  const typed = useTyping(roles);
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <div className="glass mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Available for SOC & Cloud Security roles
          </div>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Defending the <span className="text-gradient">digital perimeter</span>,
            one log at a time.
          </h1>
          <p className="mt-4 font-mono text-sm text-cyan-300/90 md:text-base">
            &gt; {typed}
            <span className="animate-blink">|</span>
          </p>
          <p className="mt-5 max-w-xl text-muted-foreground">
            I specialize in defending modern digital infrastructures through
            threat monitoring, cloud security, vulnerability management, and
            compliance-driven security operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90 glow-cyan"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1jPYSVOQ8HT2HHB7dR1wi2RQY1nlbOXTZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { k: "1+", v: "Year of Learning" },
              { k: "10+", v: "Tools learned" },
              { k: "4+", v: "Frameworks" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl p-3 text-center">
                <div className="text-gradient text-xl font-bold">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-[2rem] bg-gradient-to-br from-cyan-400/40 to-purple-500/40 blur-3xl" />
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={profile}
                alt="Lokesh Kaushik portrait"
                width={768}
                height={768}
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 h-20 bg-gradient-to-b from-cyan-400/20 to-transparent animate-scan" />
            </div>
            <div className="flex items-center justify-between p-3 pt-4 font-mono text-xs">
              <span className="text-muted-foreground">id://lk_07</span>
              <span className="flex items-center gap-1.5 text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse-glow" />
                SECURE
              </span>
            </div>
          </div>

          {floats.map((f) => (
            <div
              key={f.label}
              className={`glass-strong animate-float-slow absolute hidden rounded-2xl px-3 py-2 md:flex items-center gap-2 ${f.cls}`}
            >
              <f.icon className="h-4 w-4 text-cyan-300" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {f.label}
                </div>
                <div className="font-mono text-xs">{f.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
