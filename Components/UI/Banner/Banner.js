import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import FlowerPattern from '../Pattern/FlowerPattern'

function Banner({ imageUrl }) {

    return (
        <Container>
            <ImageContainer>
                <ImageStyle src={imageUrl} alt="second banner" layout="fill" />
            </ImageContainer>
            <FlowerPatternStyle />
        </Container>
    )
}
// hide banner on mobile devices 
const Container = styled.div`
 position: relative;
 background: var(--lightGreen);
 height: 700px;
 margin-top: 100px;
 @media (max-width: 700px){
     display: none;
 }
`
const ImageContainer = styled.div`
position: relative;
margin: 0 auto;
height: 90vh;
width: 80%;
max-width: 1300px;
max-height: 700px;
top: -100px;
z-index: 2;
`
const ImageStyle = styled(Image)`
    object-fit: cover; 

`

const FlowerPatternStyle = styled(FlowerPattern)`
position: absolute;
top: 50px;
left: 50px;
z-index: 1; 
transform: rotate(-30deg);
`
export default Banner
