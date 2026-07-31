/**
 * Equalizer toggle — animates while audio plays; click pauses/resumes.
 */
export default function AudioBars({ playing, onToggle }) {
  const bars = [0.45, 0.75, 0.35, 1, 0.55, 0.85, 0.4]

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
      aria-pressed={playing}
      className="group fixed bottom-8 left-5 z-[60] flex h-9 items-end gap-[3px] rounded-sm px-1 py-0.5 md:bottom-10 md:left-8 lg:left-14"
    >
      {bars.map((peak, i) => (
        <span
          key={i}
          className={`audio-bar w-[2.5px] rounded-full bg-gold/90 transition-colors duration-300 group-hover:bg-gold ${
            playing ? 'audio-bar--playing' : 'audio-bar--paused'
          }`}
          style={{
            '--bar-peak': peak,
            animationDelay: playing ? `${i * 0.12}s` : '0s',
            height: playing ? undefined : `${Math.max(3, peak * 8)}px`,
          }}
        />
      ))}
    </button>
  )
}
