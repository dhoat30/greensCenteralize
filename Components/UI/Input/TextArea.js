import React from 'react'
import styled from 'styled-components'
function TextArea(props) {
    return (
        <React.Fragment>
            <Label>{props.label}</Label>
            <Container
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                isInvalid={props.isInvalid}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                className={props.className}
            >
            </Container>
        </React.Fragment>

    )
}

export default TextArea

const Container = styled.textarea`
    display: block;
    width: calc(100% - 2px);
    height: 170px;
    border: none;
    outline: none;
    margin: 0 0 0 0;
    padding: 10px 5px 0 5px;
    border-radius: 5px;
    border: ${props => props.isInvalid ? "2px solid red" : "1px solid var(--borderColor)"}; 
`
const Label = styled.label`
margin-bottom: 5px;
`