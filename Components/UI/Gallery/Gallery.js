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
display: grid;

margin-top: 30px;
grid-template-columns:  1fr 1fr 1fr ;
@media(max-width: 1100px){ 
    grid-template-columns:   1fr 1fr ;

}
@media(max-width: 500px){ 
    grid-template-columns:   1fr  ;

}
`
const ImgWrapper = styled.div`
    width: 100%;
    min-width: 100px;
    height: 400px;
   
    overflow: hidden;
    cursor: pointer; 
    position: relative;
    @media(max-width: 700px){ 
        height: 200px;    
    }
  
`
const ImageStyle = styled(Image)`
object-fit: cover; 
`



export default Gallery
