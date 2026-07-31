import Signature from './Signature'

export default function HeroContent() {
  return (
    <div
      data-hero="content"
      className="relative z-40 flex min-h-svh w-full max-w-[36rem] flex-col justify-center px-5 pb-28 pt-32 sm:px-8 md:max-w-[40rem] md:px-10 md:pb-32 md:pt-28 lg:px-14 xl:pl-16"
    >
      <div className="relative overflow-visible">
        {/* Behind title — matches ref layering */}
        <Signature />

        <div className="relative z-10 isolate">
          <p
            data-hero="eyebrow"
            className="mb-3 font-sans text-[0.7rem] font-light uppercase tracking-[0.55em] text-silver/75 md:mb-4 md:text-[0.75rem] md:tracking-[0.6em]"
          >
            Tenor
          </p>

          <h1
            data-hero="title"
            className="font-display text-[clamp(3.75rem,9.5vw,7rem)] leading-[0.86] tracking-[0.02em]"
          >
            <span
              data-hero="title-gabriel"
              className="block overflow-hidden font-medium uppercase text-silver"
            >
              <span className="inline-block">Gabriel</span>
            </span>
            <span
              data-hero="title-arce"
              className="mt-0.5 block overflow-hidden font-medium uppercase text-gold"
            >
              <span className="inline-block">Arce</span>
            </span>
          </h1>

          <p
            data-hero="tagline"
            className="mt-6 font-sans text-[0.65rem] font-light uppercase tracking-[0.42em] text-silver/85 md:mt-7 md:text-[0.7rem] md:tracking-[0.48em]"
          >
            Opera. Passion. Storyteller.
          </p>

          <a
            href="#discover"
            data-hero="cta"
            className="group mt-10 inline-flex w-fit items-center gap-4 md:mt-12"
          >
            <span className="relative pb-1.5 font-sans text-[0.65rem] font-light uppercase tracking-[0.36em] text-silver transition-colors duration-300 group-hover:text-gold">
              Discover More
              <span className="absolute bottom-0 left-0 h-px w-full bg-gold transition-shadow duration-500 group-hover:shadow-[0_0_10px_rgba(197,160,89,0.6)]" />
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/80 text-gold transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:shadow-[0_0_22px_rgba(197,160,89,0.45)]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
                className="translate-y-px transition-transform duration-500 group-hover:translate-y-0.5"
              >
                <path
                  d="M6 1.5v8M6 9.5L2.5 6M6 9.5L9.5 6"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <p
        data-hero="footer-line"
        className="absolute bottom-8 left-[4.5rem] max-w-[8rem] font-sans text-[0.55rem] font-light uppercase leading-[1.8] tracking-[0.3em] text-silver/35 sm:left-24 md:bottom-10 md:left-28 lg:left-32"
      >
        From the Stage
        <br />
        to the Heart
      </p>
    </div>
  )
}
