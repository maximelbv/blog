import { useState, useEffect } from 'react'

const useScrollPosition = () => {
  useEffect(() => {
    window && window.addEventListener('scroll', onScroll)
    return () => {
      window && window.removeEventListener('scroll', onScroll)
    }
  })
  const [scrollPos, setScrollPos] = useState(window.scrollY)
  if (typeof window === 'undefined') {
    return 500
  }
  // On Scroll
  const onScroll = () => {
    setScrollPos(window && window.scrollY)
  }

  return scrollPos
}

export default useScrollPosition
