import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
function LinkItem({ name, link }) {

    return (
        <li>
            <Link href={link} passHref>
                <Anchor>
                    {name}
                </Anchor>
            </Link>
        </li>
    )
}

export default LinkItem

const Anchor = styled.a`
    font-size: var(--paragraphSize); 
    color: var(--fontGrey);
    &:hover{ 
        color: var(--offWhite);
    }
`