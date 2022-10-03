import React from 'react'

function CloseIcon({className, onClick}) {
  return (
    <svg className={className} onClick={onClick}  viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.07104 6.36394L0.7071 0L0 0.7071L6.36394 7.07104L0 13.435L0.7071 14.1421L7.07104 7.77814L13.435 14.1421L14.1421 13.435L7.77814 7.07104L14.1421 0.7071L13.435 0L7.07104 6.36394Z" fill="black"/>
</svg>

  )
}

export default CloseIcon