import React from 'react'
import styled from 'styled-components'
import ColumnTitle from '../../UI/Titles/ColumnTitle'
import MediumFonts from '../../UI/Titles/MediumFonts'
import SpecialContent from '../../UI/SpecialContent/SpecialContent'
import { useRouter } from 'next/router'

function MenuSection({ favouriteMenuData, menuImagesData }) {

  const router = useRouter()
  console.log(router.asPath)
  // // rendered items array 
  const menuItems = favouriteMenuData.map(data => {
    return (<React.Fragment key={data.id}>
      <ColumnTitle
        color="var(--darkGrey)"
        fontWeight="regular">
        {data.title.rendered}
      </ColumnTitle>
      <MediumFonts>
        {data.acf.description}
      </MediumFonts>
    </React.Fragment>)
  })

  const thaiImage = menuImagesData.filter(item => item.title.rendered.includes('Thai'))
  const indianImage = menuImagesData.filter(item => item.title.rendered.includes('Indian'))
  let firstImage, secondImage
  if (router.pathname.includes('russell')) {
    firstImage = thaiImage[0].acf.menu_image.url
    secondImage = indianImage[1].acf.menu_image.url
  }
  else {
    firstImage = menuImagesData[0].acf.menu_image.url
    secondImage = menuImagesData[1].acf.menu_image.url
  }
  return (
    <Container>
      <SpecialContent
        title="Our Specials"
        subTitle="Menu"
        content={menuItems}
        firstImage={firstImage}
        secondImage={secondImage}
        link={`https://greensnz.com/${router.asPath}/menu`}
      />

    </Container>
  )
}
const Container = styled.div`
      background: var(--lightGreen);
      padding: 150px 0 50px 0;
      position: relative;
      z-index: 3;
      `
const Flex = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      `

export default MenuSection
