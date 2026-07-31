import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Header from './Header'
import HeroAtmosphere from './HeroAtmosphere'
import HeroContent from './HeroContent'
import HeroPortrait from './HeroPortrait'
import Petals from './Petals'

export default function Hero() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    let removeMove = () => {}

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      const petals = gsap.utils.toArray('[data-hero="petal"]')
      const petalLayer = root.querySelector('[data-hero="petal-layer"]')
      const gabrielInner = root.querySelector('[data-hero="title-gabriel"] > span')
      const arceInner = root.querySelector('[data-hero="title-arce"] > span')

      petals.forEach((petal) => {
        petal.dataset.targetOpacity = getComputedStyle(petal).opacity || '0.6'
      })
      gsap.set(petals, { opacity: 0, scale: 0.55 })

      tl.from('[data-hero="opera"]', { opacity: 0, duration: 1.3 }, 0)
        .from('[data-hero="portrait"]', { x: 90, opacity: 0, duration: 1.5, ease: 'power2.out' }, 0.15)
        .from('[data-hero="header"]', { y: -24, opacity: 0, duration: 0.9 }, 0.25)
        .from(
          '[data-hero="nav-link"]',
          { y: -8, opacity: 0, duration: 0.55, stagger: 0.045 },
          0.4,
        )
        .from('[data-hero="arcs"]', { opacity: 0, scale: 0.92, transformOrigin: '35% 50%', duration: 1.4 }, 0.15)
        .from('[data-hero="signature"]', { opacity: 0, x: -20, duration: 1 }, 0.35)
        .from('[data-hero="eyebrow"]', { y: 16, opacity: 0, duration: 0.6 }, 0.5)
        .from(gabrielInner, { yPercent: 110, duration: 1, ease: 'power4.out' }, 0.58)
        .from(arceInner, { yPercent: 110, duration: 1, ease: 'power4.out' }, 0.72)
        .from('[data-hero="tagline"]', { y: 12, opacity: 0, duration: 0.6 }, 0.95)
        .from('[data-hero="cta"]', { y: 12, opacity: 0, duration: 0.6 }, 1.08)
        .from('[data-hero="footer-line"]', { opacity: 0, duration: 0.8 }, 1.15)
        .to(
          petals,
          {
            opacity: (_i, el) => Number.parseFloat(el.dataset.targetOpacity) || 0.6,
            scale: 1,
            duration: 1.1,
            stagger: { each: 0.06, from: 'random' },
          },
          0.8,
        )

      petals.forEach((petal, i) => {
        gsap.to(petal, {
          y: `+=${12 + (i % 4) * 7}`,
          x: `+=${(i % 2 === 0 ? 1 : -1) * (5 + (i % 3) * 4)}`,
          rotation: `+=${(i % 2 === 0 ? 1 : -1) * (8 + i * 2)}`,
          duration: 4 + (i % 5) * 0.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.15,
        })
      })

      const onMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2
        const y = (e.clientY / window.innerHeight - 0.5) * 2

        if (petalLayer) {
          gsap.to(petalLayer, {
            x: x * 16,
            y: y * 10,
            duration: 1.1,
            ease: 'power2.out',
            overwrite: 'auto',
          })
        }

        gsap.to('[data-hero="portrait-img"]', {
          x: x * -10,
          y: y * -6,
          duration: 1.3,
          ease: 'power2.out',
          overwrite: 'auto',
        })

        gsap.to('[data-hero="arcs"]', {
          x: x * 14,
          y: y * 8,
          duration: 1.5,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }

      root.addEventListener('pointermove', onMove)
      removeMove = () => root.removeEventListener('pointermove', onMove)
    }, root)

    return () => {
      removeMove()
      ctx.revert()
    }
  }, [])

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative min-h-svh w-full overflow-hidden bg-void"
    >
      <HeroAtmosphere />
      <HeroPortrait />
      <Petals />
      <Header />
      <HeroContent />
    </section>
  )
}
