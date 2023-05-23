import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { GlobalStyle } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default.ts'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContextProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
