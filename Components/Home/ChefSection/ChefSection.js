import React from 'react'
import SpecialContent from '../../UI/SpecialContent/SpecialContent'
import styled from 'styled-components'
import MediumFonts from '../../UI/Titles/MediumFonts'


function ChefSection({ chefData }) {
  // const dataArray = data.allWpChef.edges.map(edge => {
  //   return {
  //     id: edge.node.id,
  //     subtitle: edge.node.chefsACF.subtitle,
  //     history: edge.node.chefsACF.history,
  //     firstImage: edge.node.chefsACF.firstImage.localFile.childImageSharp,
  //     secondImage: edge.node.chefsACF.secondImage.localFile.childImageSharp
  //   }
  // })

  const content = <React.Fragment key={chefData.id}>

    <MediumFonts fontWeight="500">
      {chefData.acf.subtitle}
    </MediumFonts>
    <MediumFonts>
      {chefData.acf.history}
    </MediumFonts>
  </React.Fragment>


  return (
    <Container>
      <SpecialContent
        subTitle="Chef"
        title="Our Chef"
        content={content}
        firstImage={chefData.acf.first_image.url}
        secondImage={chefData.acf.second_image.url}
      >

      </SpecialContent>
    </Container >
  )
}

const Container = styled.div`
      background: var(--lightGreen);
      padding: 150px 0 50px 0;
      position: relative;
      z-index: 3;
      `

export default ChefSection
