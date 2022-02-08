import React, { useContext, useEffect } from 'react'
import Contact from '../../Components/Contact/Contact'
import SEO from '../../Components/SEO'
import ContactInfoContext from '../../store/contact-info-context'

export default function ContactPage(props) {
  const contactInfoCtx = useContext(ContactInfoContext)
  useEffect(() => {

    contactInfoCtx.getContactDataUrl('greens-russell')
  }, [])

  const seo = {
    title: "Contact – Greens Thai and Indian Restaurant – Russell",
    description: "Whether here for lunch, dinner or a private function, enjoy an atmosphere that combines the Indo-Thai warmth with the friendliness Russell is famed for.",
    imageSrc: props.seoData.acf.social_media_share_image.url

  }

  return (
    < React.Fragment >
      <SEO
        seo={seo}
      />
      <Contact />
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

  return {
    props: {
      aboutPageData: aboutPageData,
      seoData: seoData[0]

    },
    revalidate: 172800
  }

}


