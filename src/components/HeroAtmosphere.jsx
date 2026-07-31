/** Page atmosphere — bg.png as the full-bleed base, unchanged. */
export default function HeroAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-void" />

      <img
        src="/img/bg.png"
        alt=""
        data-hero="bg"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <svg
        className="absolute left-[-12%] top-[-18%] h-[140%] w-[82%] opacity-[0.12]"
        viewBox="0 0 800 900"
        fill="none"
        data-hero="arcs"
      >
        <circle cx="300" cy="430" r="400" stroke="#c5a059" strokeWidth="0.65" />
        <circle cx="300" cy="430" r="320" stroke="#e8e4dc" strokeWidth="0.4" />
        <circle cx="300" cy="430" r="240" stroke="#c5a059" strokeWidth="0.3" />
      </svg>
    </div>
  )
}
