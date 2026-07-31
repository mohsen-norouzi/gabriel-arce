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

      {/* Outer: parallax · Inner circles: music pulse */}
      <div
        data-hero="arcs"
        className="absolute left-[-12%] top-[-18%] h-[140%] w-[82%] opacity-[0.14] will-change-transform"
      >
        <svg
          className="h-full w-full origin-[37.5%_47.8%]"
          viewBox="0 0 800 900"
          fill="none"
          data-hero="arcs-pulse"
        >
          <circle
            data-hero="arc-ring"
            cx="300"
            cy="430"
            r="400"
            stroke="#c5a059"
            strokeWidth="0.65"
            style={{ transformOrigin: '300px 430px' }}
          />
          <circle
            data-hero="arc-ring"
            cx="300"
            cy="430"
            r="320"
            stroke="#e8e4dc"
            strokeWidth="0.4"
            style={{ transformOrigin: '300px 430px' }}
          />
          <circle
            data-hero="arc-ring"
            cx="300"
            cy="430"
            r="240"
            stroke="#c5a059"
            strokeWidth="0.3"
            style={{ transformOrigin: '300px 430px' }}
          />
        </svg>
      </div>
    </div>
  )
}
