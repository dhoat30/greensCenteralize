import React from 'react'
import styled from 'styled-components'
function MaxWidthContainer({ children, backgroundColor, className }) {
    return (
        <Section backgroundColor={backgroundColor} className={className}>
            <Container>
                {children}
            </Container>
        </Section>
    )
}

export default MaxWidthContainer

const Section = styled.section`
background: ${props => props.backgroundColor ? props.backgroundColor : "var(--darkGrey)"};
position: relative;
`

const Container = styled.div`
max-width: 1500px;
margin: 0 auto;
padding: 0 10px;
`