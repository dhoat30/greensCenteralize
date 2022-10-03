import AnchorLink from '../AnchorLink/AnchorLink'
import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../Titles/SectionTitle'
import Image from 'next/image'
import ElephantPattern from '../../UI/Pattern/ElephantPattern'

function Hero({ title, subtitle, orderOnlineLink, bookTable, desktopImage, mobileImage, containerHeight, buttons }) {

    return (
        <Container containerHeight={containerHeight}>

            {title && subtitle ?
                <Content className="row-container">
                    <SectionTitle subTitle={subtitle} color="var(--green)"> {title} </SectionTitle>

                    {buttons ?
                        null :
                        <ButtonsContainer>
                            <AnchorLink link={orderOnlineLink} background={true} targetBlank={true}> Order Online </AnchorLink>
                            <AnchorLink link={bookTable} showIcon={false}>Book a table</AnchorLink>
                        </ButtonsContainer>

                    }

                </Content>
                : null}
            <DesktopImageContainer>
                <DesktopGatsbyImage layout="fill" src={desktopImage} alt={title ? title : "hero section"} />

            </DesktopImageContainer>
            <MobileImageContainer>
                <MobileGatsbyImage layout="fill" src={mobileImage} alt={title ? title : "hero section"} />
            </MobileImageContainer>

            <PatternContainer className="row-container">
                <ElephantPatternStyle />
                <ElephantPatternStyle2 />
            </PatternContainer>


        </Container>
    )
}
const Container = styled.div`
position: relative;
background-color: var(--lightGreen);
height: ${props => props.containerHeight ? props.containerHeight : null};
`

const ButtonsContainer = styled.div`
width: 350px;
margin: 0 auto;
 display: flex;
 flex-direction: row;
  align-items: center;
  justify-content:space-around;
@media (max-width: 500px){ 
    flex-direction: column;
    height: 100px;
    width: 200px;
}`

const Content = styled.div`
position: absolute;
top: 20px;
width: 100%;
z-index: 10;
left: 50%; 
transform: translate(-50%,0);
`
const MobileImageContainer = styled.div`
position: relative;
padding-bottom: 70%; 
width: 100%; 
max-width: 1386px;
margin: 0 auto;
display: none;
@media (max-width: 850px){
    display: block;
}

@media (max-width: 400px){ 
    height: 350px;
}
`
const DesktopImageContainer = styled.div`
position: relative;
padding-bottom: 40%; 
width: 100%; 
max-width: 1386px;
margin: 0 auto;
@media (max-width: 850px){
    display: none !important;
}
`
const DesktopGatsbyImage = styled(Image)`
object-fit: cover; 
z-index: 2;

`
const MobileGatsbyImage = styled(Image)`
object-fit: cover; 
z-index: 2;

`
const PatternContainer = styled.div`
position: relative;
@media (max-width: 700px){
display: none;
}
`
const ElephantPatternStyle = styled(ElephantPattern)`
z-index: 0;
bottom: 0;
position: absolute;
left: -100px;
`
const ElephantPatternStyle2 = styled(ElephantPattern)`
z-index: 0;
bottom: 0;
position: absolute;
right: -100px;
transform: scaleX(-1);
`
export default Hero
