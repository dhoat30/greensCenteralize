import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SectionTitle from '../UI/Titles/SectionTitle'
import MenuCard from './MenuCard'
import axios from 'axios'
import MenuLink from './MenuLink'
import Overlay from '../UI/Overlay/Overlay'


function MenuPage({ menuData }) {




    const menuCard = menuData.map(item => {
        return (
            <React.Fragment key={item.id}>
                <MenuCard image={item.acf.menu_image.url} title={item.acf.menu_title} link={item.acf.pdf_menu.link} />
            </React.Fragment>
        )
    })


    return (
        <Container className="row-container">

            <SectionTitle> Select Menu</SectionTitle>
            <Flex>
                {
                    menuCard

                }

            </Flex>





        </Container>
    )
}
const Container = styled.section`
padding: 50px 0;
`
const Flex = styled.div`
flex-direction: row;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
flex-direction: row;
`

export default MenuPage
