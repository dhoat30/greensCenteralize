import React, { useContext } from 'react'
import styled from 'styled-components'
import LoadingOverlay from './UI/LoadingOverlay/LoadingOverlay'
import LoadingContext from '../store/loading-context'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Overlay from './UI/Overlay/Overlay'
import { useRouter } from 'next/router'

function Layout(props) {
    const router = useRouter()
    let header, footer
    if (router.pathname != "/") {
        header = <Header contactData={props.children[1].props.contactInfoData && props.children[1].props.contactInfoData} />
        footer = <Footer contactData={props.children[1].props.contactInfoData && props.children[1].props.contactInfoData} />

    }
    const loadingCtx = useContext(LoadingContext)
    return (
        <div>

            {header}
            <Main>{props.children}
                <LoadingOverlay show={loadingCtx.loadingOverlay} />
                <Overlay show={loadingCtx.overlay} />
            </Main>

            {footer}
        </div>
    )
}

export default Layout
const Main = styled.section`
min-height: 100%;
position: relative;
`