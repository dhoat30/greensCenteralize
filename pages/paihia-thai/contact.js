import React, { useContext, useEffect } from 'react'
import Contact from '../../Components/Contact/Contact'
import SEO from '../../Components/SEO'
import getContactInfo from '../../util/get-contact-info'

export default function ContactPage(props) {


  const seo = {
    title: "Contact – Greens Thai Restaurant – Paihia | Delivery | Byo | Gluten Free Options",
    description: "Whether here for lunch, dinner or a private function, enjoy an atmosphere that combines the Indo-Thai warmth with the friendliness Paihia is famed for.",
    imageSrc: props.seoData.acf.social_media_share_image.url
  }

  return (
    < React.Fragment >
      <SEO
        seo={seo}
      />
      <Contact contactInfoData={props.contactInfoData}/>
    </React.Fragment >
  )
}

export async function getStaticProps(context) {


  // chef
  const pages = await fetch(`${process.env.url}/wp-json/wp/v2/pages`)
  const indianPages = await pages.json()
  let aboutPageData
  if (indianPages.length > 0) {
    aboutPageData = indianPages.filter(item => item.title.rendered.includes('Thai Paihia'))
  }
  // const homePage = await getPage('home-page')
  const seoResponse = await fetch(`${process.env.url}/wp-json/wp/v2/info`)
  let seoData = await seoResponse.json()
  seoData = await seoData.filter(item => item.title.rendered.includes('Russell'))
  const contactInfoData = await getContactInfo("greens-thai-paihia") 

  return {
    props: {
      aboutPageData: aboutPageData,
      seoData: seoData[0],
      contactInfoData: contactInfoData[0]

    },
    revalidate: 86400
  }

}


