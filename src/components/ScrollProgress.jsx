import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const percent = height > 0 ? (scrolled / height) * 100 : 0
      setProgress(percent)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-[#0a192f]/50">
      <div className="h-full bg-sky-400 transition-all duration-150" style={{ width: `${progress}%` }} />
    </div>
  )
}
