import React from 'react'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from '@mui/material'

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'IRANSansLight',
  },
  palette: {
    error: { main: '#FF5151' },
    success: {
      main: '#32D74B'
    }
  },
  components: {},
})

interface Props {
  children: JSX.Element
}

export function ThemeProvider({ children }: Props) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </StyledEngineProvider>
  )
}
