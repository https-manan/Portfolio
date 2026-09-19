export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-8 font-body text-sm text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Manan Bhardwaj</p>
        <div className="flex gap-6">
          <a href="https://github.com/https-manan" target="_blank" rel="noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/manan-bhardwaj-8b1b6b433/" className="hover:text-ink">
            LinkedIn
          </a>
          <a href="mailto:mananbhardwaj2705@gmail.com" className="hover:text-ink">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
