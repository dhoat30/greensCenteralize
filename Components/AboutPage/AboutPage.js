import React from 'react'
import styled from 'styled-components'
import AboutContent from './AboutContent/AboutContent'
import Hero from '../UI/Hero/Hero'


function AboutPage({ aboutPageData }) {
  const dataArray = aboutPageData.map(item => {
    return {
      desktopImage: item.acf.desktop_hero_image.url,
      mobileImage: item.acf.mobile_hero_image.url,
      introductionContent: item.acf.introduction_content,
      firstCardImage: item.acf.first_card_image.url,
      secondCardImage: item.acf.second_card_image.url,
      history: item.acf.history_content,
      aboutRestaurant: item.acf.about_restaurant,
      chefName: item.acf.chef_name,
      chefDesignation: item.acf.chef_designation,
      chefContent: item.acf.chef_content,
      chefImage: item.acf.chef_image.url,
      restaurantManagerName: item.acf.restaurant_manager_name,
      restaurantManagerDesignation: "Restaurant Manager",
      restaurantManagerContent: item.acf.restaurant_manager_content,
      restaurantManagerImage: item.acf.restaurant_manager_image.url,
      id: item.id,
      title: "About Us"
    }
  })
  const thaiChef = aboutPageData.map(item => {
    if (item.acf.thai_chef_image) {
      return {
        chefImage: item.acf.thai_chef_image.url,
        chefName: item.acf.thai_chef_name,
        chefDesignation: item.acf.thai_chef_designation,
        chefContent: item.acf.thai_chef_content
      }
    }
    else {
      return false
    }
  })
  const HeroComponent = dataArray.map(data => {
    // console.log(data)
    return (
      <Hero containerHeight="500px" buttons={false} key={data.id} mobileImage={data.mobileImage} desktopImage={data.desktopImage} />
    )

  })
  return (
    <Container>
      {HeroComponent}

      <AboutContent
        thaiChef={thaiChef}
        dataArray={dataArray} />
    </Container>
  )
}
const Container = styled.section`

margin-bottom: -10px;

`
export default AboutPage
