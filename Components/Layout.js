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

    const loadingCtx = useContext(LoadingContext)
    return (
        <div>
                <Header contactData = {props.children[1].props.contactInfoData} />
            

            <Main>{props.children}
                <LoadingOverlay show={loadingCtx.loadingOverlay} />
            </Main>
            <Footer contactData = {props.children[1].props.contactInfoData}/>
       

        </div>
    )
}

export default Layout
const Main = styled.section`
min-height: 100%;
position: relative;
`