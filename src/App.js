import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import List from './components/List/List'
import Navigation from './components/Navigation/Navigation'
import NotFound from './components/NotFound/NotFound'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Add from './components/Add/Add'

import CssBaseline from '@material-ui/core/CssBaseline'

const App = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <Navigation />
      </header>
      <main>
        <section>
          <Switch>
            <Route exact path="/" component={List} />
            <Route exact path="/add" component={Add} />
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </section>
      </main>
      <footer></footer>
      <SideDrawer />
    </>
  )
}

export default App
