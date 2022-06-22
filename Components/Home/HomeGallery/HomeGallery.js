import React from 'react'
import Gallery from '../../UI/Gallery/Gallery'
import styled from 'styled-components'
import SectionTitle from '../../UI/Titles/SectionTitle'
import Button from '../../UI/Button/Button'
import Link from 'next/link'
import AnchorLink from '../../UI/AnchorLink/AnchorLink'
import { useRouter } from 'next/router'

function HomeGallery({ galleryData }) {
  const router = useRouter()


  return (
    <Container>

      <GalleryContainer className="row-container">
        <SectionTitle>Gallery</SectionTitle>
        <Gallery galleryData={galleryData} />
        <ButtonStyle link={`https://greensnz.com/${router.asPath}/gallery`}>View More</ButtonStyle>
      </GalleryContainer>
    </Container>
  )
}

const Container = styled.section`
position: relative;
background: var(--lightGreen);
padding: 100px 0;
`
const GalleryContainer = styled.div`
z-index: 3;
margin-bottom: 20px;
width: 100%;

`

const ButtonStyle = styled(AnchorLink)`
margin: 20px auto 0 auto;
display: block;
width: 150px;
`
export default HomeGallery
