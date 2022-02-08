import React from 'react'
import styled from 'styled-components'
import { SRLWrapper } from "simple-react-lightbox";
import Image from 'next/image'
function Gallery(props) {

    const gallery = props.galleryData.acf.gallery.map(item => {
        return (

            <ImgWrapper key={item.ID}>
                <ImageStyle className="gallery-image-wrapper" src={item.url} alt={item.title} layout="fill"></ImageStyle>
            </ImgWrapper>
        )

    })
    return (
        <Container>
            <SRLWrapper>
                <GalleryWrapper>

                    {gallery}


                </GalleryWrapper>

            </SRLWrapper>
        </Container>
    )
}

const Container = styled.div``
const GalleryWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
flex-wrap: wrap;
margin-top: 30px;
`
const ImgWrapper = styled.div`
    width: 20%;
    min-width: 280px;
    height: 300px;
    margin: 10px; 
    overflow: hidden;
    cursor: pointer; 
    position: relative;
    @media( max-width: 815px){
        width: 100%;
    }
`
const ImageStyle = styled(Image)`
object-fit: cover; 
`



export default Gallery
