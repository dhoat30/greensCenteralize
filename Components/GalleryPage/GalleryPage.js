import React from 'react'
import Gallery from '../UI/Gallery/Gallery'
import styled from 'styled-components'
import SectionTitle from '../UI/Titles/SectionTitle'

function GalleryPage({ galleryData }) {


  return (
    <Container>

      <GalleryContainer className="row-container">
        <SectionTitle>Gallery</SectionTitle>
        <Gallery galleryData={galleryData} />
      </GalleryContainer>
    </Container>
  )

}

const Container = styled.section`
position: relative;
padding: 100px;
`
const GalleryContainer = styled.div`
position: relative;
z-index: 3;
`


export default GalleryPage
