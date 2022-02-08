import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import OverlayTitle from '../../UI/Titles/OverlayTitle'
import ContactInfoContext from '../../../store/contact-info-context'
function ExtraInfo() {
    const contactInfoCtx = useContext(ContactInfoContext)

    if (!contactInfoCtx.contactData) {
        return null
    }



    return (
        <Container className="row-container">
            <Flex>
                <OverlayTitle key="12" size="small" subTitle={contactInfoCtx.contactData.acf.total_menu_options}> Dinner Options </OverlayTitle>
                <OverlayTitle key="13" size="small" subTitle={contactInfoCtx.contactData.acf.number_of_table}> Number Of Tables</OverlayTitle>
                <OverlayTitle key="14" size="small" subTitle={contactInfoCtx.contactData.acf.experience_}> Years Of Experience</OverlayTitle>
                <OverlayTitle key="15" size="small" subTitle={contactInfoCtx.contactData.acf.happy_guests}> Happy Guests</OverlayTitle>
            </Flex>
        </Container>
    )
}

const Container = styled.section`
padding-top: 200px ; 
padding-bottom: 50px;
`
const Flex = styled.div`
/* max-width: 300px;
min-width: 250px; */
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
`

export default ExtraInfo
