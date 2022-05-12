import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'setup/material-theme'
import { BrowserRouter } from 'react-router-dom'

import { Root } from 'setup/root'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
