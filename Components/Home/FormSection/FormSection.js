import React, { useContext } from 'react'
import styled from 'styled-components'
import SectionTitle from '../../UI/Titles/SectionTitle'
import Form from './Form/Form'
import ContactInfoContext from '../../../store/contact-info-context'
import { useRouter } from 'next/router'

function FormSection({ formName, emailTo, note, children, iframe }) {
    const router = useRouter()
    console.log(iframe)
    return (
        <Container id="book-table">
            <Content>
                <SectionTitle color="var(--green) ">Book a Table</SectionTitle>
                {/* <Form
                    formName={formName}
                    formNote={note}
                    emailTo={emailTo}></Form> */}
                <div dangerouslySetInnerHTML={{ __html: iframe }} />
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding: 100px 0;
    position: relative;
    margin: 0 20px;
    iframe{ 
        width: 100%; 
        border: none; 
        max-width: 540px; 
        height: 640px; 
        #rd-widget-root .logo-panel{ 
            display: none ;
        }
        label{ 
            font-size: 70px !important; 
        }
      
    }
`

const Content = styled.div`
background: var(--lightGreen);
max-width: 1300px;

margin: 0 auto;
padding: 50px 0;
`

export default FormSection