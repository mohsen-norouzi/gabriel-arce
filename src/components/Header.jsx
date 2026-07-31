const NAV_LINKS = [
  { label: 'Biography', href: '#biography' },
  { label: 'Performances', href: '#performances' },
  { label: 'Repertoire', href: '#repertoire' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Media', href: '#media' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header
      data-hero="header"
      className="absolute inset-x-0 top-0 z-50 flex items-start justify-between px-5 pt-5 sm:px-8 sm:pt-7 md:px-10 md:pt-8 lg:px-14 lg:pt-9"
    >
      <a
        href="#top"
        className="group flex flex-col items-start"
        aria-label="Gabriel Arce — Tenor"
      >
        {/* Overlapping G (silver) + A (gold) monogram — matches ref */}
        <span className="relative flex h-[2.1rem] items-end font-display text-[2rem] leading-none tracking-tight md:h-[2.35rem] md:text-[2.35rem]">
          <span className="relative z-10 text-silver">G</span>
          <span className="relative z-0 -ml-[0.28em] text-gold">A</span>
        </span>
        <span className="mt-1 font-sans text-[0.55rem] font-light uppercase tracking-[0.55em] text-silver/80">
          Tenor
        </span>
      </a>

      <nav
        aria-label="Primary"
        className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 xl:gap-x-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            data-hero="nav-link"
            className="nav-link font-sans text-[0.55rem] font-light uppercase tracking-[0.22em] text-silver/90 transition-colors duration-300 hover:text-gold sm:text-[0.58rem] sm:tracking-[0.24em] md:text-[0.62rem] md:tracking-[0.28em]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
