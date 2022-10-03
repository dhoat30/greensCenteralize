import React from 'react'
import styled from 'styled-components'

import ArrowIcon from '../Icons/ArrowIcon'

const Container = styled.button`    
    margin: ${props => props.margin ? '10px' : null};
    letter-spacing: var(--letterSpacing);
    border: 2px solid var(--green);
    padding: 10px 30px 10px 20px;
    font-size: 0.9rem;
    outline: none;
    font-family: var(--poppins);
    text-transform: uppercase;
    cursor: pointer;
    background: ${props => props.background ? "var(--green)" : "none"};    
    color: ${props => props.background ? "white" : "var(--green)"};

    &:hover{
        background: ${props => !props.background ? "var(--green)" : "none"};
       
        color: ${props => !props.background ? "white" : "var(--green)"};
        border: 2px solid var(--green);

        svg{ 
            path{ 
                fill:white; 
            }
        }
}

svg{ 
    transform: rotate(180deg);
    width: 8px;
    margin-left: 5px;  
    position: relative; 
    top: -1px; 
    path{ 
        fill: var(--green);
      
    }
}
`
function Button(props) {
    const buttonClasses = props.active ? `${props.className} button-active` : `${props.className}`

    return (
        <Container onClick={props.buttonClick} background={props.background} className={buttonClasses} margin={props.margin}>
            {props.children}
          <ArrowIcon/> 
        </Container>
    )
}

export default Button
