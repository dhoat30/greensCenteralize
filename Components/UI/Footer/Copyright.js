import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
function Copyright({ copyright }) {
    return (
        <Container>
            <Paragraph color="var(--fontGrey)"><Span>{copyright}</Span>
                <Anchor href="https://webduel.co.nz" target="_blank">Built By Web<Duel>DUEL</Duel></Anchor></Paragraph>
        </Container>
    )
}

export default Copyright
const Container = styled.div`
    border-top: 1px solid var(--lightGrey);
    padding: 10px 0;
`
const Span = styled.span`
color: var(--neonGreen);
`
const Anchor = styled.a`
color: var(--lightBlue); 
text-decoration: none;
cursor: pointer;
&:hover{ 
    color: var(--neonGreen);
    text-decoration: underline; 
}
`
const Paragraph = styled.div`
color: var(--fontGrey);
display: flex;
justify-content: space-between;
`
const Duel = styled.span`
color: var(--green);
font-weight: 800;
`