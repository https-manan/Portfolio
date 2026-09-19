export default function Resume() {
  return (
    <section id="resume" className="border-t border-line bg-bg-alt">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-20">
        <div>
          <h2 className="mb-3 font-display text-4xl text-ink md:text-5xl">Resume</h2>
          <p className="max-w-[50ch] font-body text-base text-muted">
            Download my resume for a detailed overview of my experience and work.
          </p>
        </div>
        <a
          href="/resume/resume.pdf"
          download
          className="shrink-0 border border-ink px-8 py-4 text-center font-body text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
        >
          Download resume (PDF)
        </a>
      </div>
    </section>
  );
}
