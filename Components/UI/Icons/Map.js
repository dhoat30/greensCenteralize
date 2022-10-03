import React from 'react'

function Map({className}) {
  return (
    <svg  className={className} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="150" fill="#028A2F"/>
    <path d="M150 77C121.804 77 99 99.849 99 128.1C99 166.425 150 223 150 223C150 223 201 166.425 201 128.1C201 99.849 178.196 77 150 77ZM150 146.35C139.946 146.35 131.786 138.174 131.786 128.1C131.786 118.026 139.946 109.85 150 109.85C160.054 109.85 168.214 118.026 168.214 128.1C168.214 138.174 160.054 146.35 150 146.35Z" fill="white"/>
    </svg>
    
  )
}

export default Map