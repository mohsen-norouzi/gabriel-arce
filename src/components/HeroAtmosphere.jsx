import operaBg from '../assets/hero/opera-bg.jpg'

/** Background atmosphere only — never carries UI copy. */
export default function HeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-void" />

      <img
        src={operaBg}
        alt=""
        data-hero="opera"
        className="absolute bottom-0 left-0 h-[78%] w-[62%] object-cover object-left-bottom opacity-[0.34] mix-blend-luminosity md:w-[50%]"
        style={{
          maskImage:
            'radial-gradient(ellipse 80% 90% at 20% 80%, black 0%, transparent 68%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 90% at 20% 80%, black 0%, transparent 68%)',
        }}
      />

      <div className="absolute right-[12%] top-[18%] h-[58vmin] w-[58vmin] rounded-full bg-crimson/25 blur-[100px]" />
      <div className="absolute right-[22%] top-[40%] h-[28vmin] w-[28vmin] rounded-full bg-gold/10 blur-[70px]" />

      <svg
        className="absolute left-[-12%] top-[-18%] h-[140%] w-[82%] opacity-[0.14]"
        viewBox="0 0 800 900"
        fill="none"
        data-hero="arcs"
      >
        <circle cx="300" cy="430" r="400" stroke="#c5a059" strokeWidth="0.65" />
        <circle cx="300" cy="430" r="320" stroke="#e8e4dc" strokeWidth="0.4" />
        <circle cx="300" cy="430" r="240" stroke="#c5a059" strokeWidth="0.3" />
      </svg>

      <p
        data-hero="signature"
        className="absolute left-[5%] top-[14%] select-none font-script text-[clamp(2.8rem,7vw,5rem)] leading-none text-white/[0.06] md:left-[7%] md:top-[12%]"
      >
        Gabriel Arce
      </p>

      <div
        className="absolute inset-0 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,5,0.55)_100%)]" />
    </div>
  )
}
