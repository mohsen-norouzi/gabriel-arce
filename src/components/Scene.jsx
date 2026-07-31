/**
 * Opera house scene — soft edge fade.
 * Locked from Leva: x=-171, y=80, scale=0.48, opacity=0.36
 */
export default function Scene() {
  return (
    <div
      data-hero="scene"
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
      aria-hidden="true"
    >
      <img
        src="/img/scene.png"
        alt=""
        className="absolute left-1/2 top-[58%] w-[min(110vw,1400px)] max-w-none object-cover object-center mix-blend-luminosity"
        style={{
          opacity: 0.36,
          transform:
            'translate(-50%, -50%) translate(-171px, 80px) scale(0.48)',
          transformOrigin: 'center center',
          maskImage:
            'radial-gradient(ellipse 70% 65% at 50% 55%, black 0%, black 35%, transparent 72%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 65% at 50% 55%, black 0%, black 35%, transparent 72%)',
        }}
      />
    </div>
  )
}
