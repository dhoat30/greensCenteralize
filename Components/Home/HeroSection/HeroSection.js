import React, { useState, useEffect } from 'react'
import Hero from '../../UI/Hero/Hero'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
function HeroSection({ sliderData }) {
  const acfData = sliderData.map((item) => {
    return {
      title: item.acf.title,
      subtitle: item.acf.sub_title,
      phoneNumber: item.acf.phone_number,
      orderOnlineLink: item.acf.order_online_link,
      bookTable: "#book-table",
      id: item.id,
      mobileImage: item.acf.mobile_image_.url,
      desktopImage: item.acf.desktop_image.url
    }
  })



  const HeroComponent = acfData.map((data, index) => {
    return (
      <Carousel.Item key={data.id}>
        <Hero data={data}
          title={data.title}
          subtitle={data.subtitle}
          orderOnlineLink={data.orderOnlineLink}
          bookTable={data.bookTable}
          desktopImage={data.desktopImage}
          mobileImage={data.mobileImage}
        />
      </Carousel.Item>

    )

  })

  return (

    <Container>
      <Carousel variant="dark">
        {HeroComponent}
      </Carousel>
    </Container>
  )
}

const Container = styled.section`
position: relative;
background-color: var(--lightGreen);
`

export default HeroSection
