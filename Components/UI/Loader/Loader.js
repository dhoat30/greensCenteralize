import React from 'react'

import styled from 'styled-components'
function Loader(props) {
    console.log(props)
    return (
        // "fa-spin" 
        <Container center={props.alignCenter} className="lds-ripple"><div></div><div></div></Container>
    )
}

const Container = styled.div`


    display: block;
    position: relative;
    width: 10px;
    height: 10px;
    z-index: 10; 
   margin: 0 auto; 
  }
   div {
    position: absolute;
    border: 4px solid var(--green);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
   div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  
`
export default Loader
