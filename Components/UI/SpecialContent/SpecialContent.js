import React from 'react'
import styled from 'styled-components'
import OverlayTitle from '../Titles/OverlayTitle'
import ImageCard from '../../UI/ImageCard/ImageCard'
import Link from 'next/link'
function SpecialContent(props) {

    return (
        <Container className={props.className}>
            <OverlayTitle subTitle={props.subTitle}> {props.title} </OverlayTitle>

            <DishesContainer className="row-container">
                <Content>
                    {props.content}
                    {props.link ? <Link href={props.link} passHref>
                        <LinkStyle >View Menu</LinkStyle>
                    </Link> : null}
                </Content>

            </DishesContainer>
            <ImageCardFirst>
                <ImageCard image={props.firstImage} />
            </ImageCardFirst>
            <ImageCardSecond>
                <ImageCard image={props.secondImage} />
            </ImageCardSecond>


        </Container>
    )
}
const Container = styled.div`
position: relative;
`
const DishesContainer = styled.div`
margin-top: 50px;
display: flex;
justify-content: center;

`
const Content = styled.div`
max-width: 350px;
margin-top: 30px;
`
const ImageCardFirst = styled.div`
position: absolute;
width: 100%;
max-width: 450px;
bottom: -100px;
@media (max-width: 1400px){
    width: 100%;
max-width: 350px;
height: 500px;
}
@media (max-width: 1100px){
    width: 100%;
max-width: 250px;
height: 500px;
}
@media (max-width: 900px){
  display: none;
}
`
const ImageCardSecond = styled.div`
position: absolute;
top: -100px;
right: 0;
width: 100%;
max-width: 450px;
@media (max-width: 1400px){
    width: 100%;
max-width: 350px;
height: 500px;
}
@media (max-width: 1100px){
    width: 100%;
max-width: 250px;
height: 500px;
}
@media (max-width: 900px){
  display: none;
}
`

const LinkStyle = styled.a`
color: var(--darkGrey);
 font-weight: 300;
 font-size: 1.2rem;
border-bottom: 1px solid var(--darkGrey);
&:hover{ 
    color: var(--green);
    border-bottom: 1px solid var(--green);

}
`

export default SpecialContent
