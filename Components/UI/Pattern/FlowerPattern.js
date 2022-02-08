import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
function FlowerPattern(props) {
    return (
        <ImageContainer className={props.className}>
            <Image src="/flower.png" alt="luxury pattern" placeholder="blurred"
                layout="fixed"
                width="244"
                height="223"

            />
        </ImageContainer>

    )
}

export default FlowerPattern
const ImageContainer = styled.div``