import React from 'react'
import styled from '@emotion/styled'

import {} from '../../styles/colors'

const Footer = () => {
  return <Container></Container>
}

export default Footer

const Container = styled('div')`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.footer};
`
