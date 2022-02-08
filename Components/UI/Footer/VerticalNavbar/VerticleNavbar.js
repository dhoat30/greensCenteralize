import React from 'react'
import styled from 'styled-components'
import Link from './Link/LinkItem'

function VerticleNavbar({ menuItems }) {
    const menuLinks = menuItems.map(item => {
        return <Link
            key={item.link}
            name={item.name}
            link={item.link}
        />
    })
    return (
        <Container>
            <ul>
                {menuLinks}
            </ul>
        </Container>
    )
}

export default VerticleNavbar

const Container = styled.div`
margin-top: 5px;
`

