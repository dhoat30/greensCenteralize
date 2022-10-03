import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import styled from 'styled-components'


function Logo({ className, logoData, contWidth }) {

    console.log(contWidth)

    return (
        <Container className={className} contWidth={contWidth}>
        <ImageStyle
                src={logoData.url}
                layout="responsive"
                width="100%"
                height={(logoData.height / logoData.width) * 100}
                alt="Greens Logo"
            />

                </Container>
            )
}

export default Logo

const Container = styled.div`
width: ${props=> props.contWidth}; 
    display:block;
`
const ImageStyle = styled(Image)`
object-fit: cover;
margin: 0 auto 0 0;
border: solid red;
display: block ;
`