import React from 'react'
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer'
import RowTitle from '../Typography/Titles/RowTitle'
import Subtitle from '../Typography/Titles/Subtitle'
import styled from 'styled-components'
import Image from 'next/image'
function HorizontalLayout({ title, content, image, video, theme, backgroundColor, color, flipFlex }) {
    let bkColor = theme === 'dark' ? backgroundColor : "var(--offWhite)"
    let fontColor = color ? color : 'var(--darkGrey)'
    return (
        <MaxWidthContainer backgroundColor={`${bkColor}`}>
            <Container flipFlex={flipFlex}>
                <ContentContainer>
                    <RowTitle theme={theme} color={`${fontColor}`}>{title}</RowTitle>
                    <Subtitle theme={theme} color="var(--fontGrey)">{content}</Subtitle>
                </ContentContainer>
                {video ?

                    <Video dangerouslySetInnerHTML={{ __html: video }}></Video> :
                    <ImageContainer>
                        <Image
                            src={image}
                            alt={title}
                            width="100"
                            height="60"
                            layout="responsive"
                            quality="100"
                        />

                    </ImageContainer>
                }
            </Container>
        </MaxWidthContainer >
    )
}

export default HorizontalLayout
const Container = styled.div`
padding: 100px 0;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: ${props => props.flipFlex ? "row-reverse" : "row"};
@media (max-width: 1000px ){ 
   flex-direction: column;
   padding: 50px 0;
}
`
const ContentContainer = styled.div`
width: 48%;
@media (max-width: 1000px ){ 
    width: 100%; 
}
`

const Video = styled.div`
width: 48%;
@media (max-width: 1000px ){ 
    width: 100%; 
    margin-top: 20px;
}
`
const ImageContainer = styled.div`
width: 48%;
/* align-self: flex-start; */
display: block;
@media (max-width: 1000px ){ 
    width: 100%; 
    margin-top: 20px;
}
`