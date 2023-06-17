'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import '@theme-toggles/react/css/Expand.css'
import { Expand } from '@theme-toggles/react'

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false)
  const [isToggled, setToggle] = useState(true)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    if (theme === 'light') {
      setToggle(false)
    } else if (theme === 'dark') {
      setToggle(true)
    } else {
      if (darkThemeMq.matches) {
        setToggle(true)
        setTheme('dark')
      } else {
        setToggle(false)
        setTheme('light')
      }
    }
  }, [theme, setTheme])

  if (!mounted) {
    return null
  }

  return (
    <Expand
      value={theme}
      toggled={isToggled}
      duration={750}
      onToggle={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
    />
  )
}

export default ThemeButton
