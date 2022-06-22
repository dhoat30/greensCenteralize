import React from 'react'
import Image from 'next/image'
function FruitPattern(props) {
    return (

        <Image className={props.className} src="/Fruit.png" alt="Fruit pattern" placeholder="blurred"
            layout="fixed"
            width="200"
            height="113"
        />
    )
}

export default FruitPattern
