import React from 'react'
import ContactForm from './ContactForm'
import ColumnTitle from '../Typography/Titles/ColumnTitle'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/pro-light-svg-icons'
function ContactModal({ title, showModal, setShowContactModal, emailTo, emailRouteUrl }) {
    return (
        <Container>

            <IconStyle icon={faTimes} onClick={() => setShowContactModal(false)} />

            <ColumnTitleStyle align="center">{title}</ColumnTitleStyle>
            <ContactFormStyle dropShadow={false}
                emailRouteUrl={emailRouteUrl}
                emailTo={emailTo}
            />
        </Container>
    )
}

export default ContactModal
const ColumnTitleStyle = styled(ColumnTitle)`
`
const ContactFormStyle = styled(ContactForm)`
padding: 0 20px 10px 20px !important;
`
const Container = styled.div`
    padding: 20px 0 0 0;
    position: fixed;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%); 
    width: 95%; 
    max-width: 700px; 
   
    background: var(--offWhite);
    z-index: 10; 
    overflow: auto;
    @media (max-width: 500px){ 
        max-height: 600px; 
    }
`
const IconStyle = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 2rem; 
    cursor: pointer;
`