import React, { useContext, useEffect } from 'react'
import AboutPage from '../../Components/AboutPage/AboutPage'
import SEO from '../../Components/SEO'
import ContactInfoContext from '../../store/contact-info-context'

export default function About(props) {
  const contactInfoCtx = useContext(ContactInfoContext)
  useEffect(() => {

    contactInfoCtx.getContactDataUrl('greens-russell')
  }, [])

  const seo = {
    title: "About Us – Greens Thai and Indian Restaurant – Russell",
    description: "Whether here for lunch, dinner or a private function, enjoy an atmosphere that combines the Indo-Thai warmth with the friendliness Russell is famed for.",
    imageSrc: props.seoData.acf.social_media_share_image.url

  }
  return (
    < React.Fragment >
      <SEO
        seo={seo}
      />
      <AboutPage aboutPageData={props.aboutPageData} />

    </React.Fragment >
  )
}

export async function getStaticProps(context) {


  // chef
  const pages = await fetch(`${process.env.url}/wp-json/wp/v2/pages`)
  const indianPages = await pages.json()
  let aboutPageData
  if (indianPages.length > 0) {
    aboutPageData = indianPages.filter(item => item.title.rendered.includes('About Us Russell'))
  }
  // const homePage = await getPage('home-page')
  const seoResponse = await fetch(`${process.env.url}/wp-json/wp/v2/info`)
  let seoData = await seoResponse.json()
  seoData = await seoData.filter(item => item.title.rendered.includes('Russell'))

  return {
    props: {
      aboutPageData: aboutPageData,
      seoData: seoData[0]
    },
    revalidate: 172800
  }

}


