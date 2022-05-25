import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'setup/material-theme'
import { BrowserRouter } from 'react-router-dom'

import { Root } from 'setup/root'
import ReduxProvider from './setup/store'
import { Slide, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toast = () => (
  <ToastContainer
    position="top-right"
    autoClose={4000}
    transition={Slide}
    hideProgressBar={false}
    pauseOnHover={false}
    pauseOnFocusLoss={false}
    closeOnClick
    limit={3}
  />
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Root />
          <Toast />
        </BrowserRouter>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
