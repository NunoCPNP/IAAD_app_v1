import React from 'react'
import styled from '@emotion/styled'

import Card from '../Card/Card'

const sample = require('../../dev-data/sample.json')

const Students = () => {
  console.log(sample.data)

  return (
    <Container>
      {sample.data.map((student, index) => (
        <Card key={index} data={student} />
      ))}
    </Container>
  )
}

export default Students

const Container = styled('div')`
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.background};
  padding: 6rem 1rem;
`
