import { useCallback, useRef, useState } from 'react'
import Hero from './components/Hero'
import Intro from './components/Intro'

function App() {
  const [entered, setEntered] = useState(false)
  const audioRef = useRef(null)

  const handleEnter = useCallback(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.7
      audio.play().catch(() => {
        // Autoplay may still fail in some browsers; user gesture should allow it.
      })
    }
    setEntered(true)
  }, [])

  return (
    <main className="min-h-svh bg-void">
      <audio ref={audioRef} src="/song.mp3" loop preload="auto" />
      {!entered && <Intro onEnter={handleEnter} />}
      {entered && <Hero />}
    </main>
  )
}

export default App
