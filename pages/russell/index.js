
import React, { useContext, useEffect } from 'react'
import HomePage from '../../Components/Home/Home'
import SEO from '../../Components/SEO'
import getContactInfo from '../../util/get-contact-info'

export default function Home(props) {

  const seo = {
    title: "Greens Thai and Indian Restaurant – Russell",
    description: "Whether here for lunch, dinner or a private function, enjoy an atmosphere that combines the Indo-Thai warmth with the friendliness Russell is famed for.",
    imageSrc: props.seoData.acf.social_media_share_image.url
  }
  return (
    < React.Fragment >
      <SEO
        seo={seo}
      />

      <HomePage
        sliderData={props.sliderData}
        sloganData={props.sloganData}
        favouriteMenuData={props.favouriteMenuData}
        menuImagesData={props.menuImagesData}
        uspData={props.uspData}
        bannerData={props.bannerData}
        testimonialData={props.testimonialData}
        chefData={props.chefData}
        galleryData={props.galleryData}
        contactInfoData={props.contactInfoData}
      />
    </React.Fragment >
  )
}

export async function getStaticProps(context) {
  // const homePage = await getPage('home-page')
  const seoResponse = await fetch(`${process.env.url}/wp-json/wp/v2/info`)
  let seoData = await seoResponse.json()
  seoData = await seoData.filter(item => item.title.rendered.includes('Russell'))

  // slider data 
  const response = await fetch(`${process.env.url}/wp-json/wp/v2/slider`)
  const data = await response.json()
  const sliderData = data.filter(item => item.title.rendered.includes("Russell"))

  // slogan 
  const sloganResponse = await fetch(`${process.env.url}/wp-json/wp/v2/slogan?slogan-category=1349`)
  const sloganData = await sloganResponse.json()

  // favourite menu  
  const favouriteMenu = await fetch(`${process.env.url}/wp-json/wp/v2/menu?menu-category-slug=russell-favourite`)
  const favouriteMenuData = await favouriteMenu.json()

  //menu images 
  const menuImages = await fetch(`${process.env.url}/wp-json/wp/v2/menu_images?menu-images-category-slug=russell`)
  const menuImagesData = await menuImages.json()

  //menu images 
  const usp = await fetch(`${process.env.url}/wp-json/wp/v2/usp?_embed`)
  const uspData = await usp.json()

  //Banner data
  const banner = await fetch(`${process.env.url}/wp-json/wp/v2/banner?banner-category-slug=russell&_embed`)
  const bannerData = await banner.json()

  // testimonial
  const testimonial = await fetch(`${process.env.url}/wp-json/wp/v2/testimonial?testimonial-category-slug=russell`)
  const testimonialData = await testimonial.json()

  // chef
  const chef = await fetch(`${process.env.url}/wp-json/wp/v2/chef?chef-category-slug=russell`)
  const chefData = await chef.json()

  // chef
  const gallery = await fetch(`${process.env.url}/wp-json/wp/v2/gallery`)
  const indianGallery = await gallery.json()
  let galleryData
  if (indianGallery.length > 0) {
    galleryData = indianGallery.filter(item => item.title.rendered.includes('Russell'))
  }
  const contactInfoData = await getContactInfo("greens-russell") 

  return {
    props: {
      sliderData: sliderData,
      sloganData: sloganData[0],
      favouriteMenuData: favouriteMenuData,
      menuImagesData: menuImagesData,
      uspData: uspData,
      bannerData: bannerData[0],
      testimonialData: testimonialData,
      chefData: chefData[0],
      galleryData: galleryData[0],
      seoData: seoData[0],
      contactInfoData: contactInfoData[0]

    },
    revalidate: 86400
  }

}


