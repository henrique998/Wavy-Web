import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export function useColors() {
  return useContext(ThemeContext)
}
