import React from 'react'
import { useState } from 'react'

export const ToggleTheme = () => {

    const [theme, setTheme] = useState('light');
    const themeSwitcher = () => {
        if (theme === "light") {
            setTheme('dark');
        } else {
            setTheme('light')
        }
    }

  return (
    <>
    </>
  )
}
