import React, { useContext } from 'react'
import Logo from '../UI/Logo/Logo'
import Navbar from './Navbar/Navbar'
import styled from 'styled-components'
import Link from 'next/link'
import ContactInfoContext from '../../store/contact-info-context'
import AnchorLink from '../UI/AnchorLink/AnchorLink'
import { useRouter } from 'next/router'

// menu array


function Header({ contactData }) {
  const router = useRouter()
  let url
  if (contactData.slug === 'greens-thai-paihia') {
    url = '/paihia-thai'
  }
  else if (contactData.slug === 'greens-indian-pahia') {
    url = '/paihia-indian'
  }
  else if (contactData.slug === 'greens-russell') {
    url = '/russell'
  }

  const menuArray = [
    {
      id: 121545,
      url: `${url}`,
      title: "Home"
    },
    {
      id: 121546,
      url: `${url}/menu`,
      title: "Menu"
    },
    {
      id: 121547,
      url: `${url}/gallery`,
      title: "Gallery"
    },
    {
      id: 121548,
      url: `${url}/about`,
      title: "About"
    },
    {
      id: 121549,
      url: `${url}/contact`,
      title: "Contact"
    },
    {
      id: 1215410,
      url: contactData.acf.order_online_link,
      title: "Order Online"
    },
  ]

  const firstPartMenu = menuArray.slice(0, 3).map(data => {
    return {
      id: data.id,
      url: data.url,
      label: data.title
    }
  })
  const secondPartMenu = menuArray.slice(3, 6).map(data => {
    return {
      id: data.id,
      url: data.url,
      label: data.title
    }
  })
  const mobileMenuArrayData = menuArray.map(data => {
    return {
      id: data.id,
      url: data.url,
      label: data.title
    }
  })
  return (
    <Container className='header'>
      <DesktopNavbar className="row-container">
        <Navbar firstMenuArray={firstPartMenu} />
        <Link href={menuArray[0].url} passHref>
          <LinkStyle><Logo logoData={contactData.acf.logo} header={true} contWidth="150px" /></LinkStyle>
        </Link>
        <Navbar firstMenuArray={secondPartMenu} />
      </DesktopNavbar>

      <MobileNavbar className="row-container">

        <Navbar firstMenuArray={mobileMenuArrayData} />
        <Link href={menuArray[0].url} passHref>
          <LinkStyle><Logo logoData={contactData.acf.logo} header={true} contWidth="100px" /></LinkStyle>
        </Link>
      </MobileNavbar>
    </Container>
  )
}

const Container = styled.div`
    background: var(--lightGreen);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    @media(max-width: 1000px){
        
    }
`
const AnchorLinkStyle = styled(AnchorLink)`
@media(max-width: 1000px){
    display: none;
}
`
const LinkStyle = styled.a`
margin: 0 30px;
@media (max-width: 1000px){
   margin: 0;

 }
`
const DesktopNavbar = styled.div`
@media (min-width : 1000px){ 
  display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
}
display: none;
`

const MobileNavbar = styled.div`
display: none;

 @media (max-width: 1000px){
  
   display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center !important;
width: 100%;
z-index: 120;

 }

`
export default Header
