import React from 'react'
import FruitPattern from '../../UI/Pattern/FruitPattern'
import styled from 'styled-components'
import RowTitle from '../../UI/Titles/RowTitle'

function SloganSection({ title }) {

  return (
    <Container >
      <FruitPattern />
      <RowTitle color="var(--darkGrey)">{title}</RowTitle>
    </Container>
  )
}

const Container = styled.div`
background-color: var(--lightGreen);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 100px 0;
`
export default SloganSection
