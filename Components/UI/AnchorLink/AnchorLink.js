import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/pro-regular-svg-icons'
import Link from 'next/link'
function AnchorLink(props) {
    const targetBlank = props.targetBlank ? "_blank" : null
    const mobile = props.mobileIcon ? faMobile : faPhoneAlt;
    const icon = props.showIcon ? <FontStyle icon={mobile} style={{ fontSize: '15' }} /> : null

    return (
        <React.Fragment>
            {
                props.link &&
                <Link href={props.link} passHref>
                    <Container onClick={props.buttonClick}
                        background={props.background}
                        className={props.className}
                        margin={props.margin}
                        target={targetBlank}>{props.children}</Container>
                </Link>
            }
        </React.Fragment>


    )
}
const Container = styled.a`
    display: inline-block;
    text-align: center;

    text-decoration: none; 
    letter-spacing: var(--letterSpacing);
    border: 2px solid var(--green);
    padding: 10px 25px 10px 25px;
    font-size: 0.9rem;
    outline: none;
    font-family: var(--poppins);
    margin:${props => props.margin};
    text-transform: uppercase;
    cursor: pointer;
    background: ${props => props.background ? "var(--green)" : "none"};
    color: ${props => props.background ? "white" : "var(--green)"};

    &:hover{
        background: ${props => !props.background ? "var(--green)" : "none"};
        color: ${props => !props.background ? "white" : "var(--green)"};
        border: 2px solid var(--green);
        text-decoration: none;
}
`

const FontStyle = styled(FontAwesomeIcon)`
margin-right: 5px;
`

export default AnchorLink
