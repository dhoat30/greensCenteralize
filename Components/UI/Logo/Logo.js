import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import ContactInfoContext from '../../../store/contact-info-context'
import { useRouter } from 'next/router'

function Logo({ className, logo }) {
    const contactInfoCtx = useContext(ContactInfoContext)
    let contactData = contactInfoCtx.contactData
    const router = useRouter()

    const logoImg = contactData ? <ImageStyle
        src={contactData.acf.logo.url}
        layout="fixed"
        width={router.pathname.includes('/russell') ? 180 : 150}
        height={53}
        alt="Greens Logo"
    /> : "Loading"


    return (
        <Container className={className}>
            {logoImg}

        </Container>
    )
}

export default Logo

const Container = styled.div`
/* width: 150px;
height:53px;
position: relative; */

`
const ImageStyle = styled(Image)`
object-fit: cover;
margin: 0 auto 0 0;
border: solid red;
`