import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Intro gate — centered GA / TENOR / ENTER.
 * Logo & button assets can replace the markup later.
 */
export default function Intro({ onEnter }) {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('[data-intro="bg"]', { opacity: 0, scale: 1.04, duration: 1.5, ease: 'power2.out' }, 0)
        .from('[data-intro="logo"]', { opacity: 0, y: 18, duration: 1 }, 0.25)
        .from('[data-intro="tenor"]', { opacity: 0, y: 10, duration: 0.8 }, 0.45)
        .from('[data-intro="line"]', { scaleY: 0, duration: 0.9, transformOrigin: 'top' }, 0.7)
        .from('[data-intro="enter"]', { opacity: 0, y: 16, duration: 0.85 }, 0.95)
    }, root)

    return () => ctx.revert()
  }, [])

  const handleEnter = () => {
    const root = rootRef.current
    if (!root) {
      onEnter()
      return
    }

    gsap.to(root, {
      opacity: 0,
      duration: 0.85,
      ease: 'power2.inOut',
      onComplete: onEnter,
    })
  }

  return (
    <section
      ref={rootRef}
      className="fixed inset-0 z-[100] flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-void"
      aria-label="Introduction"
    >
      {/* Background — intro-bg as-is */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-void" />
        <img
          src="/img/intro-bg.png"
          alt=""
          data-intro="bg"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      {/* Center brand stack */}
      <div className="relative z-10 flex flex-col items-center">
        <div data-intro="logo" className="flex flex-col items-center">
          <span className="relative flex h-[3.25rem] items-end font-display text-[3.25rem] leading-none tracking-tight md:h-[4rem] md:text-[4rem]">
            <span className="relative z-10 text-silver">G</span>
            <span className="relative z-0 -ml-[0.3em] text-gold">A</span>
          </span>
          <p
            data-intro="tenor"
            className="mt-3 font-display text-[0.7rem] font-normal uppercase tracking-[0.72em] text-silver md:mt-4 md:text-[0.78rem] md:tracking-[0.8em]"
          >
            Tenor
          </p>
        </div>

        <div
          data-intro="line"
          className="mt-10 h-16 w-px bg-gradient-to-b from-gold/80 to-gold/20 md:mt-12 md:h-20"
          aria-hidden="true"
        />

        <button
          type="button"
          data-intro="enter"
          onClick={handleEnter}
          className="group mt-8 flex flex-col items-center gap-3 md:mt-10"
          aria-label="Enter site"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/75 text-gold transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:shadow-[0_0_22px_rgba(197,160,89,0.4)] md:h-12 md:w-12">
            <svg
              width="14"
              height="14"
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
          <span className="font-display text-[0.65rem] uppercase tracking-[0.55em] text-silver/90 transition-colors duration-300 group-hover:text-gold md:text-[0.7rem] md:tracking-[0.6em]">
            Enter
          </span>
        </button>
      </div>
    </section>
  )
}
