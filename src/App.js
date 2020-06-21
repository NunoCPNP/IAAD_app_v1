import React from 'react'
import styled from '@emotion/styled'

import Navigation from './components/Navigation/Navigation'
import Loader from './components/Loader/Loader'
import Footer from './components/Footer/Footer'

import GlobalStyles from './styles/GlobalStyles'

const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Main>
        <section>
          <Loader />
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
