import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'

import ContactInfoContext from '../../store/contact-info-context'
import Map from '../UI/Icons/Map'
import ArrowIcon from '../UI/Icons/ArrowIcon'

function EntryPage() {
    const [showBranches, setShowBranches] = useState(false)
    const contactInfoCtx = useContext(ContactInfoContext)

    useEffect(() => {
        contactInfoCtx.getShowHeaderFooter(false)

    }, [])
    const clickHandler = () => {

        setShowBranches(true)
    }
    const backClickHandler = () => {
        setShowBranches(false)
    }
    return (
        <Container className="row-container entry-page">
            <BackgroundImage style={{ backgroundImage: `url(/greens-background.jpeg)` }} />
            <ContentContainer>
                <Title> Welcome To</Title>

                <ImgStyle src='/Greens-Logo.png' />
                {!showBranches ? <LocationTitle> Choose Location</LocationTitle> : <LocationTitle> Choose Cuisine</LocationTitle>}

                {showBranches ?
                    <ButtonContainer>
                        <AnchorStyle href="https://greensnz.com/paihia-indian">
                            <MapStyle />
                            Green&apos;s Indian
                        </AnchorStyle>
                        <AnchorStyle href="https://greensnz.com/paihia-thai">
                            <MapStyle />
                            Green&apos;s Thai
                        </AnchorStyle>
                        <GoBack onClick={backClickHandler}>
                            <ArrowIcon />
                            Go Back
                        </GoBack>
                    </ButtonContainer>
                    :
                    <ButtonContainer>
                        <ButtonStyle onClick={clickHandler}>
                            <MapStyle />                             Green&apos;s Paihia
                        </ButtonStyle>
                        <AnchorStyle href="https://greensnz.com/russell">
                            <MapStyle />                             Green&apos;s Russell
                        </AnchorStyle>
                    </ButtonContainer>
                }


            </ContentContainer>

        </Container>
    )
}
const Container = styled.section`
padding: 0 0;

`
const BackgroundImage = styled.div`
background-size: cover;
width: 100%; 
height: 100%;
position: fixed;
top: 0;
left: 0;
z-index: 0; 
`
const ContentContainer = styled.div`
 position: absolute;
 z-index: 10;
 padding: 40px;
 background: white; 
 left: 50%;
 top: 50vh;
 transform: translate(-50%, -50%);
`

const ImgStyle = styled.img`
width: 100%;
max-width: 350px;
min-width: 260px;
margin-bottom: -20px;
`

const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    font-style: italic;
`
const LocationTitle = styled.h2`
 font-size: 1.7rem;
    text-align: center;
    margin: 30px 0 10px 0;
`
const ButtonContainer = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-between;
`

const ButtonStyle = styled.button`
background: var(--green);
border: 2px solid var(--green);
font-size: 1.1rem;
color: white;
width: 100%;
padding: 8px 0;
margin: 0 0 10px 0;
&:hover{
    background: none; 
    color: var(--green);
}
`
const AnchorStyle = styled.a`
background: var(--green);
border: 2px solid var(--green);
text-align: center;
color: white;
width: 100%;
font-size: 1.1rem;
margin: 0 0 10px 0;
padding: 8px 0;
cursor: pointer;
&:hover{
    background: none; 
    color: var(--green);
}

`
const MapStyle = styled(Map)`
width: 30px; 
margin-right: 5px;
`

const GoBack = styled.div`
text-align: center; 
margin: 5px auto 0 auto;
font-size: 1.1rem;
cursor: pointer;
&:hover{ 
    text-decoration: underline; 
    color: var(--green);
}
color: var(--green);
svg {
    width: 10px;
    margin-right: 5px; 
    path{ 
        fill: var(--green);
    } 
}
`
export default EntryPage
