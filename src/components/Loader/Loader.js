import React from 'react'
import styled from '@emotion/styled'

import { darkBlue, white, darkRed } from '../../styles/colors'

const Loader = () => {
  return (
    <Container>
      <div className="loader">Loading...</div>
    </Container>
  )
}

export default Loader

const Container = styled('div')`
  background-color: ${darkBlue};
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: ${white};

  .loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  .loader {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid ${darkRed};
    transform: translateZ(0);
    animation: load8 1.1s infinite linear;
  }

  @-webkit-keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
