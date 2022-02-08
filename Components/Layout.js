import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ContactInfoContext from '../store/contact-info-context'
import LoadingOverlay from './UI/LoadingOverlay/LoadingOverlay'
import LoadingContext from '../store/loading-context'
import Header from './Header/Header'
import getContactInfo from '../util/get-contact-info'
import Footer from './Footer/Footer'

function Layout(props) {
    const contactInfoCtx = useContext(ContactInfoContext)
    const loadingCtx = useContext(LoadingContext)
    useEffect(() => {
        axios("/api/contact-info")
            .then(res => {
                if (res) {
                    const contactData = res.data.data.filter((item) => contactInfoCtx.contactDataUrl === item.slug)
                    contactInfoCtx.getContactData(contactData[0])
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [contactInfoCtx.contactDataUrl])
    console.log()
    return (
        <div>
            {contactInfoCtx.showHeaderFooter &&
                <Header />
            }

            <Main>{props.children}
                <LoadingOverlay show={loadingCtx.loadingOverlay} />
            </Main>
            {contactInfoCtx.showHeaderFooter &&
                <Footer />
            }

        </div>
    )
}

export default Layout
const Main = styled.section`
min-height: 100%;
position: relative;
`