import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Logo from '../UI/Logo/Logo'
import axios from 'axios'
import ColumnTitle from '../UI/Titles/ColumnTitle'
import AnchorLinkIcon from '../UI/AnchorLinkIcon/AnchorLinkIcon'
import Copyright from '../UI/Copyright/Copyright'
import MobileFixedButtons from '../UI/MobileFixedButtons/MobileFixedButtons'
import ContactInfoContext from '../../store/contact-info-context'
const Footer = (props) => {
    const contactInfoCtx = useContext(ContactInfoContext)
    let contactData = contactInfoCtx.contactData
    let infoArray
    if (!contactData) {
        return "loading"
    }

    infoArray = {
        streetAddress: contactData.acf.street_address,
        region: contactData.acf.region,
        phone: contactData.acf.phone,
        email: contactData.acf.email,
        facebook: contactData.acf.facebook,
        tripAdvisor: contactData.acf.trip_advisor,
        menuLog: contactData.acf.menu_log,
        openingHours: contactData.acf.opening_hours,
        closed: contactData.acf.closed_,
        copyright: contactData.acf.copyright,
        orderOnlineLink: contactData.acf.order_online_link

    }

    return (
        <React.Fragment>

            <Container>
                <Content className="row-container">

                    <ContactBox>
                        < ColumnTitle color="var(--green)">
                            Contact Us
                        </ColumnTitle >
                        <Items>
                            <AnchorLinkIcon
                                link={`${infoArray.streetAddress}`}
                                icon={"faMapMarkerAlt"}
                            >
                                {infoArray.streetAddress} <SecondText >{infoArray.region}</SecondText>
                            </AnchorLinkIcon>

                            <AnchorLinkIcon
                                link={`tel: ${infoArray.phone}`}
                                icon={"faPhoneAlt"}
                            >
                                {infoArray.phone}
                            </AnchorLinkIcon>

                            <AnchorLinkIcon
                                link={`mailto: ${infoArray.email}`}
                                icon={"faEnvelope"}
                                targetBlank="_blank"
                            >
                                {infoArray.email}
                            </AnchorLinkIcon>
                        </Items>


                    </ContactBox>

                    <LogoContainer>
                        <Logo width="250px" mobileWidth="220px" />
                        <SocialContainer>
                            <AnchorLinkIcon target="_blank" icon="faFacebook" link={infoArray.facebook} size="35px"> </AnchorLinkIcon>
                            <AnchorLinkIcon target="_blank" icon="faTripadvisor" link={infoArray.tripAdvisor} size="35px"> </AnchorLinkIcon>

                        </SocialContainer>
                    </LogoContainer>

                    <OpeningHoursContainer>
                        <ColumnTitle color="var(--green)">
                            Opening Hours
                        </ColumnTitle >
                        <Items>
                            <AnchorLinkIcon icon="faClock" >
                                Tuesday–Sunday
                                <SecondText >{infoArray.openingHours}</SecondText>
                                {infoArray.closed ?
                                    <SecondText >{infoArray.closed} Closed</SecondText> : null
                                }

                            </AnchorLinkIcon>
                        </Items>
                    </OpeningHoursContainer>
                </Content>
                <Copyright copyright={infoArray.copyright} />
                <MobileFixedButtons orderOnlineLink={infoArray.orderOnlineLink} phoneNumber={infoArray.phone} />
            </Container >

        </React.Fragment>

    )
}

const Container = styled.section`
background: var(--lightGreen); 
padding: 50px 0 0 0;
`

const SecondText = styled.span`
margin-left: 23px;
display: block;
`
const Content = styled.div`
display: flex; 
flex-direction: row;
justify-content: space-around;
align-items: flex-start;
flex-wrap: wrap;
@media(max-width: 630px){ 
  flex-direction: column;
justify-content: space-between;
align-items:center;
flex-wrap: wrap;
}
`
const ContactBox = styled.div`

`
const LogoContainer = styled.div`
margin: 15px 0;
@media(max-width: 630px){ 
  margin: 20px 0 -20px  0;

}
`
const OpeningHoursContainer = styled.div`

`
const Items = styled.div`
margin-top: 10px;
`

const SocialContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 110px;
margin: 10px auto;
`

export default Footer
