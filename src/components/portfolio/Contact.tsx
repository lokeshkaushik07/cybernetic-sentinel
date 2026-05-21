import { useState } from "react";
import { Section } from "./Section";
import { Mail, MapPin, Phone, Linkedin, Github, Copy, Check, Send } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "ilokeshkaushik@gmail.com", href: "mailto:ilokeshkaushik@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 70275 40304", href: "tel:+917027540304" },
  { icon: MapPin, label: "Location", value: "Chandigarh, India" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/lokeshkaushik07", href: "https://www.linkedin.com/in/lokeshkaushik07/" },
  { icon: Github, label: "GitHub", value: "github.com/Lokeshkaushik07", href: "https://github.com/Lokeshkaushik07" },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }}
      className="rounded-md p-1.5 text-muted-foreground transition hover:bg-white/10 hover:text-cyan-300"
      aria-label="Copy"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-cyan-300" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section
      id="contact"
      eyebrow="// contact"
      title={<>Let's <span className="text-gradient">connect</span></>}
      description="Open to SOC, cloud security, and GRC opportunities. I usually reply within a day."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="glass-strong rounded-3xl p-6 md:p-8">
          <h3 className="text-lg font-semibold">Direct channels</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Pick the one that works for you.
          </p>
          <ul className="mt-6 space-y-2">
            {contacts.map((c) => (
              <li
                key={c.label}
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition hover:border-cyan-400/30"
              >
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-500/20 text-cyan-300">
                  <c.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="block truncate text-sm text-foreground transition hover:text-cyan-300"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div className="truncate text-sm">{c.value}</div>
                  )}
                </div>
                <CopyButton text={c.value} />
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 2500);
          }}
          className="glass-strong space-y-4 rounded-3xl p-6 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@domain.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="What's this about?" />
          <div>
            <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="Tell me a bit about the role or project…"
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-cyan-400/50 focus:bg-white/10 focus:shadow-[0_0_0_4px_oklch(0.85_0.18_200/0.12)]"
            />
          </div>
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-3 text-sm font-medium text-background transition hover:opacity-90 glow-cyan sm:w-auto"
          >
            {sent ? <Check className="h-4 w-4" /> : <Send className="h-4 w-4" />}
            {sent ? "Message queued" : "Send message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-400/50 focus:bg-white/10 focus:shadow-[0_0_0_4px_oklch(0.85_0.18_200/0.12)]"
      />
    </div>
  );
}
