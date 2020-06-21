import React from 'react'
import styled from '@emotion/styled'

const Menu = () => {
  return <Container></Container>
}

export default Menu

const Container = styled('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.menu};
  z-index: 5;
`
