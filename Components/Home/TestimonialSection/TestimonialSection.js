import React, { useState, useEffect } from 'react'
import Carousels from '../../UI/Carousels/Carousels'
import styled from 'styled-components'
import SectionTitle from '../../UI/Titles/SectionTitle'

import QuoteIcon from '../../UI/Icons/QuoteIcon'

function TestimonialSection({ testimonialData }) {
  const testimonialArray = testimonialData.map(data => {
    return {
      title: data.title.rendered,
      id: data.id,
      content: data.acf.testimony
    }
  })
  return (
    <Container>
      <TestimonialBox className="row-container">
        <SectionTitle fontFamily="var(--playfairDisplay)">
          <QuoteIconStyle />
        </SectionTitle>
        <CarouselsStyle data={testimonialArray} />
      </TestimonialBox>



    </Container>
  )
}

const Container = styled.section`
background-color: var(--lightGreen);
position: relative;
margin-top: -10px;
padding: 100px 0 100px 0;

`
const TestimonialBox = styled.div`
max-width: 1000px;
margin: 0 auto;
`
const CarouselsStyle = styled(Carousels)`
margin-top:50px;
`
const QuoteIconStyle = styled(QuoteIcon)`
width: 120px; 
path{ 
  fill: var(--darkGreen);

}
`

export default TestimonialSection
