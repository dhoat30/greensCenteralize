import React, { useRef, useEffect } from 'react'
import LargeTitle from '../Typography/Titles/LargeTitle'
import styled from 'styled-components'
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer'
import ColumnTitle from '../Typography/Titles/ColumnTitle'
import Image from 'next/image'
import Subtitle from '../Typography/Titles/Subtitle'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import ExtraLargeTitle from '../Typography/Titles/ExtraLargeTitle'

function ImageTwoTitleLayout({ firstTitle, firstSubtitle, secondTitle, secondSubtitle, video, backgroundColor, className, theme }) {
    return (
        <MaxWidthContainer backgroundColor={backgroundColor} >
            <Section>
                <Container className={className} >

                    <div dangerouslySetInnerHTML={{ __html: video }} ></div>
                    <ExtraLargeTitleStyle
                        align="center">
                        {firstTitle}
                    </ExtraLargeTitleStyle>
                    <SubtitleStyle
                        align="center">
                        {firstSubtitle}
                    </SubtitleStyle>
                    <ExtraLargeTitleStyle
                        align="center">
                        {secondTitle}
                    </ExtraLargeTitleStyle>
                    <SubtitleStyle
                        align="center">
                        {secondSubtitle}
                    </SubtitleStyle>
                </Container>
            </Section>

        </MaxWidthContainer >

    )
}

export default ImageTwoTitleLayout

const Container = styled.section`
padding: 100px 0 100px 0;
max-width: 1000px; 
margin: 0 auto;
`
const Section = styled.div`

`
const ExtraLargeTitleStyle = styled(ExtraLargeTitle)`
 background-image: linear-gradient(
    to right bottom,
    #149c4f,
    #00aa8e,
    #00b3c7,
    #00b7ee,
    #72b7ff
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 7rem;
  margin-top: 30px;
`

const ImageContainer = styled.div`
position: relative;
width: 300px;
height: 500px;
margin: 5px;
`
const ImageSection = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const SubtitleStyle = styled(Subtitle)`
color: var(--lightGrey);
margin-bottom: 50px;
`
const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    &>div{ 
        height: 245px;
    }
`
const ImageStyle = styled(Image)`
object-fit: cover;
object-position: top;
`