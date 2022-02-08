import React from 'react'
import styled from 'styled-components'
function MediumFonts(props) {
    return (
        <Container
            color={props.color}
            dangerouslySetInnerHTML={{ __html: props.children }}
            fontWeight={props.fontWeight}
            className={props.className}
            align={props.align}>

        </Container>
    )
}

export default MediumFonts
const Container = styled.h6`
    font-size: 1rem;
    font-weight: ${props => props.fontWeight ? props.fontWeight : "500"};
    margin: 0;
    text-align: ${props => props.align ? props.align : "left"};
    color: ${props => props.color ? props.color : "var(--darkGrey)"}; 
    letter-spacing: 0.05rem;
`