import { useCallback, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import AudioBars from './components/AudioBars'
import Hero from './components/Hero'
import Intro from './components/Intro'

const PLAY_VOLUME = 0.7

function App() {
  const [entered, setEntered] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)
  const fadeTween = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    const onEnded = () => setPlaying(false)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('ended', onEnded)

    const silence = () => {
      fadeTween.current?.kill()
      audio.pause()
      audio.volume = PLAY_VOLUME
      setPlaying(false)
    }

    const onVisibility = () => {
      if (document.hidden) silence()
    }

    window.addEventListener('pagehide', silence)
    window.addEventListener('beforeunload', silence)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      silence()
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('ended', onEnded)
      window.removeEventListener('pagehide', silence)
      window.removeEventListener('beforeunload', silence)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  const handleEnter = useCallback(() => {
    const audio = audioRef.current
    if (audio) {
      fadeTween.current?.kill()
      audio.volume = PLAY_VOLUME
      audio.play().catch(() => {})
    }
    setEntered(true)
  }, [])

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    fadeTween.current?.kill()

    if (audio.paused) {
      audio.volume = 0
      audio.play().catch(() => {})
      fadeTween.current = gsap.to(audio, {
        volume: PLAY_VOLUME,
        duration: 0.55,
        ease: 'power1.out',
      })
      return
    }

    // Smooth fade to silent, then pause — bars ease down via CSS
    setPlaying(false)
    fadeTween.current = gsap.to(audio, {
      volume: 0,
      duration: 0.65,
      ease: 'power1.inOut',
      onComplete: () => {
        audio.pause()
        audio.volume = PLAY_VOLUME
      },
    })
  }, [])

  return (
    <main className="min-h-svh bg-void">
      <audio ref={audioRef} src="/song.mp3" preload="auto" />
      {!entered && <Intro onEnter={handleEnter} />}
      {entered && (
        <>
          <Hero playing={playing} />
          <AudioBars playing={playing} onToggle={toggleMusic} />
        </>
      )}
    </main>
  )
}

export default App
