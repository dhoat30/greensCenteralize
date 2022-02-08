import React, { useRef, useEffect } from 'react'
import LargeTitle from '../Typography/Titles/LargeTitle'
import styled from 'styled-components'
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer'
import ColumnTitle from '../Typography/Titles/ColumnTitle'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

function VerticleLayout({ title, content, image, video, className, theme, backgroundColor, subtitle }) {


    return (
        <MaxWidthContainer backgroundColor={backgroundColor} >
            <Container className={className} >
                <motion.div >
                    <LargeTitle
                        theme={theme}
                        color={theme === 'dark' ? 'var(--offWhite)' : "var(--darkGrey)"}
                        align="center">{title}</LargeTitle>
                </motion.div>

                <motion.div >
                    <ColumnTitleStyle
                        theme={theme}
                        align="center"
                        color="var(--lightGrey)">
                        {content}
                    </ColumnTitleStyle>
                </motion.div>
                <Sub dangerouslySetInnerHTML={{ __html: subtitle }}></Sub>
                {image &&
                    <motion.div>
                        <ImageContainer
                            className="image-animation">
                            <Image
                                src={image}
                                alt={content}
                                width="100"
                                height="100"
                                layout="responsive"
                                quality="100"
                            />
                        </ImageContainer>
                    </motion.div>
                }

                <Video dangerouslySetInnerHTML={{ __html: video }}>
                </Video>
            </Container>
        </MaxWidthContainer>

    )
}

export default VerticleLayout

const Container = styled.section`
padding: 100px 0 100px 0;
max-width: 1000px; 
margin: 0 auto;
`
const ImageContainer = styled.div`
width: 100%;
max-width: 700px;
margin: 0 auto;
overflow: hidden;
`
const Video = styled.div`
margin-top: 10px;
`
const Sub = styled.div`
color: white;
text-align: center !important;
font-size: 2rem; 
font-weight: 500;
`
const ColumnTitleStyle = styled(ColumnTitle)`
margin-bottom: 50px;
`