import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  background: red;
  font-size: 16px
`

const SectionTitle = ({title})=>(
  <Title>
    {title} 
  </Title> 
)


export default SectionTitle 