import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { white } from '../../styles/colors'

const Card = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <div>
          <p>
            Nome: <span>{data.name}</span>
          </p>
          <p>
            Email: <span>{data.email}</span>
          </p>
        </div>
        <div>
          <p className="module">{data.currentModule}</p>
        </div>
      </Wrapper>
    </Container>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.any,
    name: PropTypes.any,
  }),
}

export default Card

const Container = styled('div')`
  border-top: 0.2rem solid ${white};
  border-bottom: 0.2rem solid ${white};
  padding: 2rem 1rem;
  font-size: 1.5rem;
`

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;

  .module {
    font-size: 3rem;
  }
`
