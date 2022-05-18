import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'setup/material-theme'
import { BrowserRouter } from 'react-router-dom'

import { Root } from 'setup/root'
import ReduxProvider from './setup/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
