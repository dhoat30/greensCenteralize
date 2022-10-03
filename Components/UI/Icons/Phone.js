import React from 'react'

function Phone({className}) {
  return (
    <svg className={className} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="150" fill="#028A2F"/>
    <path d="M110.15 141.425C120.95 162.65 138.35 179.975 159.575 190.85L176.075 174.35C178.1 172.325 181.1 171.65 183.725 172.55C192.125 175.325 201.2 176.825 210.5 176.825C214.625 176.825 218 180.2 218 184.325V210.5C218 214.625 214.625 218 210.5 218C140.075 218 83 160.925 83 90.5C83 86.375 86.375 83 90.5 83H116.75C120.875 83 124.25 86.375 124.25 90.5C124.25 99.875 125.75 108.875 128.525 117.275C129.35 119.9 128.75 122.825 126.65 124.925L110.15 141.425Z" fill="white"/>
    </svg>
    
  )
}

export default Phone