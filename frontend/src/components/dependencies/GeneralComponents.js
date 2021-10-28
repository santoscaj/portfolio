import React from 'react'
import styled from 'styled-components'

export const VerticalBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;

`
export const HorizontalBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
`
const VerticalMainlBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  align-items: center;
  margin: auto
`
const GroupBlock = styled.div`
  width: 100%;
`

export const IndividualBlock = styled.div`
width: 100%;
border-radius: 5px;
border:1px solid var(--block-border-color);  
padding: 5px;
:hover{
  border:1px solid var(--block-border-color-hover);  
}
`

export const BoldHeader1 = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 600
`

export const ItalicHeader2 = styled.div`
  color: darkgray;
  font-size: 16px;
  font-style: italic
`

export const Header3 = styled.div`
  color: black;
  font-size: 14px;
`

export const Header3Light = styled.div`
color: darkgray;
font-size: 14px;
`

const MainTitle = styled.div`
  padding: 20px;
  background: white;
  border-bottom: 2px solid darkblue;
  font-size: 25px
`

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px
`

export const SectionTitle = ({title})=>(
  <MainTitle> {title} </MainTitle> 
)

export const GroupArea = ({title, components})=>(
  <>
    <SectionTitle title={title} /> 
    <VerticalMainlBlock>
      <GroupBlock>
      { components }
      </GroupBlock>
    </VerticalMainlBlock> 
  </>
)
