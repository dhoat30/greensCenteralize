import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import HeroImageText from '../Hero/HeroImageText'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
function Slider({ sliderImages }) {
    const slide = sliderImages.reverse().map((item, index) => {
        return <Carousel.Item key={index}>
            <Link href={item.link} passHref>
                <a>
                    <ImageStyle
                        className="d-block w-100"
                        src={item.desktopImage}
                        alt="First slide"
                    />
                </a>
            </Link>
        </Carousel.Item>
    })
    return (
        <Container>
            <Carousel indicators={true}>
                {slide}
            </Carousel>
        </Container>

    )
}

export default Slider
const Container = styled.div`


`
const ImageStyle = styled.div`
object-fit: cover; 
`