/**
 * Layered portraits — girl values locked from Leva.
 * Girl: x=-53, y=-115, scale=0.74, opacity=0.47
 */
export default function HeroPortrait() {
  return (
    <div
      data-hero="portrait"
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
    >
      <div
        data-hero="girl"
        className="absolute top-[16%] right-[-1%] z-10 h-[48%] md:top-[14%] md:right-[1%] md:h-[52%] lg:right-[3%] lg:h-[55%]"
        style={{
          transform: 'translate(-53px, -115px) scale(0.74)',
          transformOrigin: 'right center',
        }}
      >
        <div data-hero="girl-parallax" className="h-full will-change-transform">
          <img
            src="/img/girl.png"
            alt=""
            aria-hidden="true"
            data-hero="girl-img"
            className="h-full w-auto max-w-none object-contain object-right"
            style={{
              opacity: 0.47,
              maskImage:
                'linear-gradient(to top, transparent 0%, black 28%, black 100%)',
              WebkitMaskImage:
                'linear-gradient(to top, transparent 0%, black 28%, black 100%)',
            }}
          />
        </div>
      </div>

      <img
        src="/img/gabriel.png"
        alt="Gabriel Arce, tenor"
        data-hero="portrait-img"
        className="absolute bottom-0 right-0 z-20 h-[88%] w-auto max-w-none object-contain object-right-bottom md:h-[92%] lg:h-[95%] lg:right-[-1%]"
      />
    </div>
  )
}
