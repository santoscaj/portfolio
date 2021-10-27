import React from 'react'
import styled from 'styled-components'

export const VerticalBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid transparent;
  :hover{
    border: 1px solid lightgray
  }
`
export const HorizontalBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
`

const Title = styled.div`
  padding: 20px;
  background: white;
  border-bottom: 2px solid darkblue;
  font-size: 25px
`

export const SectionTitle = ({title})=>(
  <Title>
    {title} 
  </Title> 
)