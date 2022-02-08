import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
function ImageCard({ image }) {

    return (
        <ImageContainer>
            <ImageStyle src={image} alt="menu image" layout="fill" />
        </ImageContainer>
    )
}
const ImageContainer = styled.div`
    position: relative;
    width: 100%;

    height: 500px;
    border-radius: 20px;
    box-shadow: 6px 5px 26px 4px rgba(200,252,200,1);
-webkit-box-shadow: 6px 5px 26px 4px rgba(200,252,200,1);
-moz-box-shadow: 6px 5px 26px 4px rgba(200,252,200,1);
`
const ImageStyle = styled(Image)`
      border-radius: 20px;
    object-fit: cover;

`

export default ImageCard
