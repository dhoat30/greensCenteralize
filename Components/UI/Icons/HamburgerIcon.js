import React from 'react'

function HamburgerIcon({className, onClick}) {
  return (
    <svg className={className} onClick={onClick} viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.870117 0.173828H19.8701V1.17383H0.870117V0.173828Z" fill="black"/>
    <path d="M0.870117 5.17383H19.8701V6.17383H0.870117V5.17383Z" fill="black"/>
    <path d="M19.8701 10.1738H0.870117V11.1738H19.8701V10.1738Z" fill="black"/>
    </svg>
    
  )
}

export default HamburgerIcon