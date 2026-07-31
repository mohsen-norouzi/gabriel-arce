import portrait from '../assets/hero/portrait.png'

/** Photographic right plane only — no baked UI text. */
export default function HeroPortrait() {
  return (
    <div
      data-hero="portrait"
      className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[min(62vw,760px)] md:w-[min(56vw,820px)] lg:w-[min(54vw,900px)]"
    >
      <img
        src={portrait}
        alt="Gabriel Arce, tenor"
        data-hero="portrait-img"
        className="absolute bottom-0 right-0 h-full w-auto max-w-none object-contain object-right-bottom md:right-[-1%] lg:right-[-3%]"
      />

      <div
        className="absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-void via-void/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-void via-void/50 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-void to-transparent"
        aria-hidden="true"
      />
    </div>
  )
}
