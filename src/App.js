import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import styled from '@emotion/styled'

import { appControllersContext } from './context/appcontrollers/context'

import Navigation from './components/Navigation/Navigation'
import Loader from './components/Loader/Loader'
import Footer from './components/Footer/Footer'
import Students from './components/Students/Students'
import Menu from './components/Menu/Menu'
import NotFound from './components/NotFound/NotFound'

import GlobalStyles from './styles/GlobalStyles'

const App = () => {
  const appcontrollers = useContext(appControllersContext)
  const { state } = appcontrollers

  return (
    <>
      <header>
        <Navigation />
      </header>
      <Main>
        <section>
          {state.loading && <Loader />}
          {state.menu && <Menu />}
          <Switch>
            <Route exact path="/" component={Students} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </section>
      </Main>
      <footer>
        <Footer />
      </footer>
      <GlobalStyles />
    </>
  )
}

export default App

const Main = styled('main')`
  background-color: ${(props) => props.theme.colors.background};
`
