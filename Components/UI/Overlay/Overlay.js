import React from 'react'
import styled from 'styled-components'

function Overlay({ onClick, className, show }) {
    return (
        <>
       { show && 
        <OverlayStyle className={className} onClick={onClick}></OverlayStyle>}
        </>
    )
}

export default Overlay
const OverlayStyle = styled.div`
position: fixed;
background: rgba(255,255,255,0.5);
width: 100%;
bottom: 0;
z-index: 10;
top: 0;
left: 0;
cursor:pointer; 
`