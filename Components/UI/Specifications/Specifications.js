import React from 'react'
import styled from 'styled-components'
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer'
import Image from 'next/image'
import { style } from 'dom-helpers'
function Specifications({ image, specsArray, backgroundColor, height }) {
    const specsList = specsArray.map((item, index) => {
        return <tbody key={index}>
            <ListItem key={index}>
                <Key> {item.key}</Key>
                <Value>{item.value}</Value>
            </ListItem>
        </tbody>
    })

    let imageHeight = height ? height : "210";
    return (
        <MaxWidthContainer backgroundColor={backgroundColor}>
            <Container>
                <ImgContainer>
                    <Image
                        src={image}
                        alt="robot specification"
                        layout="responsive"
                        width="100"
                        height={imageHeight}
                    />
                </ImgContainer>
                <SpecsContainer>
                    {specsList}
                </SpecsContainer>
            </Container>
        </MaxWidthContainer>

    )
}

export default Specifications
const Container = styled.div`

@media(max-width: 500px){ 
    display: none;
}
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0;
@media (max-width: 1000px){ 
    flex-direction: column; 
}
`
const ImgContainer = styled.div`
    display: block;
    width: 20%;
    margin-right: 50px;
    @media(max-width: 1000px ){ 
        width: 40%;
    }
`
const SpecsContainer = styled.table`
overflow-x: auto;;
`
const ListItem = styled.tr`
color: var(--offWhite);
letter-spacing: 0.05rem;
font-size:1rem;
/* display: flex;
justify-content: flex-start;  
width: 100%;
max-width: 300px;  */
`
const Value = styled.td`
 padding: 15px 0 15px 10px !important;

max-width: 500px;
`
const Key = styled.td`

`