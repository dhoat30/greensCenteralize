import React from 'react'
import Image from 'next/image'
function ElephantPattern(props) {
    return (

        <img className={props.className} src="/elephant.png" alt="luxury pattern" placeholder="blurred"
            layout="fixed"
            width={200}

        />

    )
}

export default ElephantPattern
