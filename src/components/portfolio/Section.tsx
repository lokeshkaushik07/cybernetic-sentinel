import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <div className="glass mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-cyan-300">
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            {eyebrow}
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          {description && (
            <p className="mt-3 text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
