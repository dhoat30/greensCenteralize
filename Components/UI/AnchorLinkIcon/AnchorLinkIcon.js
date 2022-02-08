import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/pro-duotone-svg-icons'
import { faFacebook, faTripadvisor } from '@fortawesome/free-brands-svg-icons'

import styled from 'styled-components'

function AnchorLinkIcon(props) {
    let iconStyle

    switch (props.icon) {
        case "faPhoneAlt":
            iconStyle = faPhoneAlt
            break

        case "faMapMarkerAlt":
            iconStyle = faMapMarkerAlt
            break

        case "faEnvelope":
            iconStyle = faEnvelope
            break

        case "faFacebook":
            iconStyle = faFacebook
            break


        case "faClock":
            iconStyle = faClock
            break

        default:
            iconStyle = null
    }

    return (

        <AnchorLink target={props.target} size={props.size} href={props.link}>
            {iconStyle &&
                <FontAwesomeIcon icon={iconStyle} />
            }

            {props.icon === "faTripadvisor" && <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="tripadvisor" className="svg-inline--fa fa-tripadvisor fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.91,178.82,576,127.58H471.66a326.11,326.11,0,0,0-367,0H0l47.09,51.24A143.911,143.911,0,0,0,241.86,390.73L288,440.93l46.11-50.17A143.94,143.94,0,0,0,575.88,285.18h-.03A143.56,143.56,0,0,0,528.91,178.82ZM144.06,382.57a97.39,97.39,0,1,1,97.39-97.39A97.39,97.39,0,0,1,144.06,382.57ZM288,282.37c0-64.09-46.62-119.08-108.09-142.59a281,281,0,0,1,216.17,0C334.61,163.3,288,218.29,288,282.37Zm143.88,100.2h-.01a97.405,97.405,0,1,1,.01,0ZM144.06,234.12h-.01a51.06,51.06,0,1,0,51.06,51.06v-.11A51,51,0,0,0,144.06,234.12Zm287.82,0a51.06,51.06,0,1,0,51.06,51.06A51.06,51.06,0,0,0,431.88,234.12Z"></path></svg>

            }



            <SpanStyle align={props.align}>  {props.children}</SpanStyle>
        </AnchorLink>

    )
}
const AnchorLink = styled.a`
   font-size: ${props => props.size ? props.size : "1rem"};
 font-family: var(--poppins);
 font-weight: 300;
 color: var(--green);
 display: block;
 &:hover{ 
   color: var(--darkGrey);
   cursor: pointer;
 }
`
const SpanStyle = styled.span`
margin-left: 5px;
text-align: ${props => props.align === "center" ? "center" : "left"};

`
export default AnchorLinkIcon
