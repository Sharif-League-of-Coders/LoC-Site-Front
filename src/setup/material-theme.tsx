import React from 'react'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  Theme,
  StyledEngineProvider,
} from '@mui/material'

const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'IRANSansLight',
  },
  palette: {
    error: { main: '#FF5151' },
  },
  components: {},
})

interface Props {
  children: JSX.Element
}

/* <CssBaseline /> */
export function ThemeProvider({ children }: Props) {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </StyledEngineProvider>
  )
}
