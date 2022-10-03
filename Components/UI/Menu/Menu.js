import React from 'react'
import MenuItem from './MenuItem/MenuItem'
import styled from 'styled-components'


function Menu(props) {
    const menuItems = props.menuArray.map(menuItem => {
        return <MenuItem closeClick={props.closeClick} key={menuItem.id} menuSlug={menuItem.url}>{menuItem.label}</MenuItem>
    })
    return (

        <Container flexRow={props.flexRow} mobileMenu={props.mobileMenu}>
            {/* if home is true add a home link */}
            {props.home ? <MenuItem menuSlug="/" closeClick={props.closeClick}>Home</MenuItem> : null}
            {/* if order online exist add it to navbar */}
            {menuItems}
            {props.orderOnline ? <MenuItem
                anchorTag={true}
                key="147001"
                label="Order Online"
                menuSlug={props.orderOnline}
                closeClick={props.closeClick}
            >Order Online</MenuItem> : null}

        </Container>
    )
}

const Container = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-direction: ${props => props.flexRow ? "row" : "column"};
    position: ${props => props.mobileMenu ? "absolute" : "static"};
    top: 50px; 
    right: 0;
    z-index: 20;
    width: 100%;
    @media (max-width: 1000px ){ 
        background: var(--lightGreen); 
        width: 90vw;
       left: 20px;
       top: 50px; 
       li{ 
        border-top: 1px solid var(--green);
        a{ 
            padding: 20px 10px; 
        }
       }
        border-bottom: 1px solid var(--green);
      
    }
`
export default Menu
