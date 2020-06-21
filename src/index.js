import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppControllersStateProvider } from './context/appcontrollers/context'

import App from './App'

import { ThemeProvider } from 'emotion-theming'
import { darkTheme } from './themes/darkTheme'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <AppControllersStateProvider>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AppControllersStateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
