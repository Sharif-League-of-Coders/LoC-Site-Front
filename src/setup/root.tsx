import { ThemeProvider } from './material-theme'
import { Landing } from '../scenes/landing'

export function Root() {
  return (
    <ThemeProvider>
      <Landing />
    </ThemeProvider>
  )
}
