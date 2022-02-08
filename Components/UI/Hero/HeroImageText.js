import React, { useEffect } from 'react'
import styled from 'styled-components'
import ExtraLargeTitle from '../Typography/Titles/ExtraLargeTitle'
import LargeTitle from '../Typography/Titles/LargeTitle'
import Subtitle from '../Typography/Titles/Subtitle'
import Image from 'next/image'
import ColumnTitle from '../Typography/Titles/ColumnTitle'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
function HeroImageText({ image, title, subtitle, imageWidth, imageHeight, backgroundColor, color }) {
    const { ref, inView } = useInView()
    const imageAnimation = useAnimation()

    useEffect(() => {
        if (inView) {

            imageAnimation.start({
                opacity: 1,
                transition: {
                    duration: 3,
                    delay: 0.9
                }
            })
        }

    }, [inView])


    return (
        <Container backgroundColor={backgroundColor}>
            <MaxWidth>
                <Content>
                    <ExtraLargeTitle color={color}>{title}</ExtraLargeTitle>
                    <ColumnTitleSytle color={color}>{subtitle}</ColumnTitleSytle>
                </Content>

                <ImageContainer>
                    <motion.div ref={ref}

                        animate={imageAnimation}
                        initial={{ opacity: 0 }}
                    >
                        {image &&
                            <ImageStyle
                                priority={true}
                                src={image}
                                layout="responsive"
                                height={imageHeight ? imageHeight : "100"}
                                width={imageWidth ? imageWidth : '100'}
                                quality={100}
                                alt={title}
                            />
                        }
                    </motion.div>
                </ImageContainer>

            </MaxWidth>
        </Container>
    )
}

export default HeroImageText
const Container = styled.div`
 background-color: ${props => props.backgroundColor ? props.backgroundColor : "var(--darkGrey)"};
`
const MaxWidth = styled.div`
max-width: 1500px; 
 margin: 0 auto;
padding: 0 10px;
display: flex;
justify-content: space-between;
align-items: center;
height: 100vh;
max-height: 700px;
@media (max-width: 1200px){ 
    height: 140vh;
    max-height: 1200px;
    flex-direction: column;
   align-items: center;
   justify-content: center;
}
@media (max-width: 600px){ 
    height: 100vh;
    max-height: 1200px;
}
@media (max-width: 450px){ 
    height: auto;
    max-height: 1200px;
    padding: 50px 10px 0 10px;
}
`
const ColumnTitleSytle = styled(ColumnTitle)`
margin-top: 25px;
`
const Content = styled.div`
`

const ImageContainer = styled.div`
display: block;
    height: 90%;
    width: 600px;
    /* position: relative; */
    align-self: flex-end;
    @media (max-width: 1200px){ 
    align-self: center;
    height: auto;
    width: 100%;
    max-width: 700px;
        margin-top: 20px;
}
overflow: hidden;
`
const ImageStyle = styled(Image)`
object-fit: cover;
object-position: top;
`