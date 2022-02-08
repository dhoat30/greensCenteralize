
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

function MultipleImagesLayout({ title, content, images, video, className, theme, backgroundColor }) {
    return (
        <MaxWidthContainer backgroundColor={backgroundColor} >
            <Container className={className} >

                <LargeTitle
                    theme={theme}
                    color={theme === 'dark' ? 'var(--offWhite)' : "var(--darkGrey)"}
                    align="center">{title}</LargeTitle>




                <SubtitleStyle
                    theme={theme}
                    align="center"
                    color="var(--lightGrey)">
                    {content}
                </SubtitleStyle>

                {images &&
                    <ImageSection>
                        <ImageContainer
                            className="image-animation">
                            <ImageStyle
                                src={images[0].image}
                                alt={content}
                                layout="fill"
                                quality="100"
                            />
                        </ImageContainer>
                        <FlexColumn>
                            <ImageContainer
                                className="image-animation">
                                <ImageStyle
                                    src={images[1].image}
                                    alt={content}
                                    layout="fill"
                                    quality="100"
                                />
                            </ImageContainer>
                            <ImageContainer
                                className="image-animation">
                                <ImageStyle
                                    src={images[2].image}
                                    alt={content}
                                    layout="fill"
                                    quality="100"
                                />
                            </ImageContainer>
                        </FlexColumn>
                        <ImageContainer
                            className="image-animation">
                            <ImageStyle
                                src={images[3].image}
                                alt={content}
                                layout="fill"
                                quality="100"
                            />
                        </ImageContainer>
                    </ImageSection>
                }

            </Container>
        </MaxWidthContainer>

    )
}

export default MultipleImagesLayout

const Container = styled.section`
padding: 100px 0 100px 0;
max-width: 1000px; 
margin: 0 auto;
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
margin: 50px 0 0 0;
`
const SubtitleStyle = styled(Subtitle)`
margin-top: 20px;
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