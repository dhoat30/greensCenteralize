import React from 'react'
import styled from 'styled-components'



const AnchorButton = React.forwardRef(({ children, className, align, href }, ref) => {

    return (

        <Anchor
            ref={ref}
            href={href}
            className={className}
            align={align}>
            {children}
        </Anchor>

    )
})
AnchorButton.displayName = 'AnchorButton'
export default AnchorButton
const Anchor = styled.a`
color: var(--green);
font-size: 1.2rem;
display: block;
margin-top: 10px;
text-align: ${props => props.align ? props.align : "left"}; 
&:hover{ 
    text-decoration: underline; 
}
`