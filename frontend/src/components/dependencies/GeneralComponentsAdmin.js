import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
  border: 1px solid gray;
  border-radius: 5px;
  width: 60px;
  height: 30px;
  margin: 5px;
`

export const VerticalBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
`

export const Discard = ()=>(
  <Button  style={{borderColor :'orange'}}>Discard</Button>
)

export const Save = ()=>(
  <Button style={{borderColor :'green'}}>Save</Button>
)

export const Delete = ()=>(
  <Button style={{borderColor :'red'}}>Delete</Button>
)

export const BoldHeader3 = styled.div`
  color: black;
  font-weight:600;
  font-size: 14px;
`

export const HorizontalBlock = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

export const FlexRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const HorizontalGroup = ({property, value})=>(
  <HorizontalBlock> 
    <BoldHeader3> {property} </BoldHeader3> 
    <input defaultValue={value} />
  </HorizontalBlock>
)
 