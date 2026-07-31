/**
 * Signature watermark behind the title.
 * Locked from Leva: x=345, y=149, scale=0.39, rotate=0, opacity=0.2
 * Transform lives on the img so GSAP fade on the wrapper can't move it.
 */
export default function Signature() {
  return (
    <div data-hero="signature" className="pointer-events-none absolute inset-0 z-0">
      <img
        src="/img/signature.png"
        alt=""
        aria-hidden="true"
        className="absolute left-[8%] top-[45%] w-[min(90vw,620px)] max-w-none select-none object-contain mix-blend-lighten md:left-[5%] md:w-[min(85vw,700px)]"
        style={{
          opacity: 0.2,
          transform:
            'translate(-50%, -50%) translate(345px, 149px) rotate(0deg) scale(0.39)',
          transformOrigin: 'center center',
        }}
      />
    </div>
  )
}
