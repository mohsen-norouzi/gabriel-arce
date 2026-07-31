import { useCallback, useEffect, useRef, useState } from 'react'
import AudioBars from './components/AudioBars'
import Hero from './components/Hero'
import Intro from './components/Intro'

function App() {
  const [entered, setEntered] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
    }
  }, [])

  const handleEnter = useCallback(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.7
      audio.play().catch(() => {})
    }
    setEntered(true)
  }, [])

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }, [])

  return (
    <main className="min-h-svh bg-void">
      <audio ref={audioRef} src="/song.mp3" loop preload="auto" />
      {!entered && <Intro onEnter={handleEnter} />}
      {entered && (
        <>
          <Hero />
          <AudioBars playing={playing} onToggle={toggleMusic} />
        </>
      )}
    </main>
  )
}

export default App
