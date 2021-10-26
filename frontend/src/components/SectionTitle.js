import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  padding: 20px;
  background: white;
  border-bottom: 2px solid darkblue;
  font-size: 25px
`

const SectionTitle = ({title})=>(
  <Title>
    {title} 
  </Title> 
)


export default SectionTitle 