import React from 'react'
import Banner from '../../UI/Banner/Banner'

function SecondBanner({ bannerData }) {


  let imageData
  imageData = bannerData._embedded['wp:featuredmedia']['0'].source_url
  return (
    <div>
      <Banner imageUrl={imageData} alt="second banner on a home page" />
    </div>
  )
}

export default SecondBanner
