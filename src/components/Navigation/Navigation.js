import React from 'react'
import styled from '@emotion/styled'

import BurgerIcon from '../BurgerIcon/BurgerIcon'

import {} from '../../styles/colors'

const Navigation = () => {
  return (
    <Container>
      <div>
        <img src="/iaad_sample.png" alt="" />
      </div>
      <BurgerIcon />
    </Container>
  )
}

export default Navigation

const Container = styled('nav')`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.navigation};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  z-index: 10;

  img {
    height: 3.5rem;
  }
`
