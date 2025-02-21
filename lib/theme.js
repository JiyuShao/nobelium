import { createContext, useContext, useEffect, useState } from 'react'

export function getCurrentDisplayTheme() {
  let defaultTheme = 'light'
  if (typeof window === 'undefined') {
    return defaultTheme
  }
  return localStorage.theme || defaultTheme
}

const initialTheme = getCurrentDisplayTheme()
const ThemeContext = createContext({ theme: initialTheme, setTheme: (_theme) => { } })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initialTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default function useTheme() {
  return useContext(ThemeContext)
}
