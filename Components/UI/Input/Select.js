import React from 'react'
import styled from 'styled-components'
function Select({ onChange, className, label }) {
    return (
        <div>
            <Label>{label}</Label>
            <SelectStyle
                onChange={onChange}
                name="robots" id="robots">
                <option value="BellaBot">BellaBot</option>
                <option value="PuduBot">PuduBot</option>
                <option value="HolaBot">HolaBot</option>
                <option value="KettyBot">KettyBot</option>
            </SelectStyle>
        </div>
    )
}

export default Select
const SelectStyle = styled.select`
  display: block;
  width: calc(100% - 2px);
  height: 45px;
  border: none;
  outline: none;
  margin: 0 0 10px 0;
  padding: 0 5px 0 5px;
  border-radius: 5px;
border: ${props => props.isInvalid ? "2px solid red" : "1px solid var(--borderColor)"}; 

`

const Label = styled.label`
margin-bottom: 5px;
`