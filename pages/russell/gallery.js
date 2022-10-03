import React, { useContext, useEffect } from 'react'
import GalleryPage from '../../Components/GalleryPage/GalleryPage'
import SEO from '../../Components/SEO'
import getContactInfo from '../../util/get-contact-info'

export default function Gallery(props) {

  const seo = {
    title: "Gallery – Greens Thai and Indian Restaurant – Russell",
    description: "Whether here for lunch, dinner or a private function, enjoy an atmosphere that combines the Indo-Thai warmth with the friendliness Russell is famed for.",
    imageSrc: props.seoData.acf.social_media_share_image.url

  }

  return (
    < React.Fragment >
      <SEO
        seo={seo}
      />
      <GalleryPage
        galleryData={props.galleryData}

      />

    </React.Fragment >
  )
}

export async function getStaticProps(context) {


  // chef
  const gallery = await fetch(`${process.env.url}/wp-json/wp/v2/gallery`)
  const indianGallery = await gallery.json()
  let galleryData
  if (indianGallery.length > 0) {
    galleryData = indianGallery.filter(item => item.title.rendered.includes('Russell'))
  }

  // const homePage = await getPage('home-page')
  const seoResponse = await fetch(`${process.env.url}/wp-json/wp/v2/info`)
  let seoData = await seoResponse.json()
  seoData = await seoData.filter(item => item.title.rendered.includes('Russell'))
  const contactInfoData = await getContactInfo("greens-russell") 

  return {
    props: {
      galleryData: galleryData[0],
      seoData: seoData[0],
      contactInfoData: contactInfoData[0]


    },
    revalidate: 86400
  }

}


