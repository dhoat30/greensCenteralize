import cookie from 'cookie'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'

import SEO from '../Components/SEO'
import EntryPage from '../Components/EntryPage/EntryPage'

export default function HomePage(props) {
  const seo = {
    title: "Greens Thai and Indian Restaurant – Russell & Paihia",
    description: "Whether here for lunch, dinner or a private function, enjoy an atmosphere that combines the Indo-Thai warmth with the friendliness Paihia is famed for.",
    imageSrc: props.contactData.acf.social_media_share_image.url
  }
  return (
    < React.Fragment >
      <SEO
        seo={seo}
      />
      <EntryPage />
    </React.Fragment >
  )
}
export async function getStaticProps(context) {
  // get home page data using category from hero images 
  // const homePage = await getPage('home-page')
  const response = await fetch(`${process.env.url}/wp-json/wp/v2/info`)
  let data = await response.json()
  data = await data.filter(item => item.title.rendered.includes('Russell'))

  return {
    props: {
      contactData: data[0]
    },
    revalidate: 172800
  }

}


