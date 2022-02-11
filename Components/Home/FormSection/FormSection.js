import React, { useContext } from 'react'
import styled from 'styled-components'
import SectionTitle from '../../UI/Titles/SectionTitle'
import Form from './Form/Form'
import ContactInfoContext from '../../../store/contact-info-context'
function FormSection() {
    const contactInfoCtx = useContext(ContactInfoContext)
    // console.log(contactInfoCtx.contactData.acf.contact_form_name)
    return (
        <Container id="book-table">
            <Content>
                <SectionTitle color="var(--green) ">Book a Table</SectionTitle>
                <Form
                    formName={contactInfoCtx.contactData && contactInfoCtx.contactData.acf.booking_form_name}
                    formNote={contactInfoCtx.contactData && contactInfoCtx.contactData.acf.booking_form_note}
                    emailTo={contactInfoCtx.contactData && contactInfoCtx.contactData.acf.booking_form_email}></Form>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding: 100px 0;
    position: relative;
    margin: 0 20px;
`

const Content = styled.div`
background: var(--lightGreen);
max-width: 1300px;

margin: 0 auto;
padding: 50px 0;
`

export default FormSection