import React from 'react'
import Image from 'next/image'
function BuddhaPattern(props) {
    return (

        <Image className={props.className} src="/buddha.svg" alt="luxury pattern" placeholder="blurred"
            layout="fixed"
            width={100}
            height={190}
            align={props.align}
        />

    )
}

export default BuddhaPattern
