export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-16 pt-14 md:px-10 md:pb-20 md:pt-16">
      <span className="mb-6 inline-block bg-ink px-3 py-1.5 font-mono text-sm font-medium text-bg">
        Manan Bhardwaj
      </span>
      <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
        A product engineer.
      </h1>
      <p className="mt-4 max-w-[46ch] font-body text-lg text-muted">
        Building scalable web applications and ML systems.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#work"
          className="border border-ink px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
        >
          View work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 font-body text-sm font-medium text-ink underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
} 