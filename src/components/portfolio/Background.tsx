export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-purple-600/20 blur-3xl animate-float-slower" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl animate-float-slow" />
    </div>
  );
}
