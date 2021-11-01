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
const VerticalMainBlock = styled.div`
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
margin: 10px 5px;
cursor: pointer;
transition: 1s;
:hover{
  background: rgb(252,252,252);
  border:1px solid darkgray;  
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
  // margin: 40px 100px 5px 100px;
  padding: 40px 5px 5px 5px;
  margin: auto;
  background: white;
  font-size: 25px;
  border-bottom: 1px solid darkblue;
  max-width: 1300px;

  
  // -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 9px 50px -30px rgba(0,0,0,0.17); 
  // box-shadow: 0px 10px 13px -7px #000000, 0px 9px 50px -30px rgba(0,0,0,0.17);
`

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px
`

export const SectionTitle = ({title})=>(
  <MainTitle className="title" > {title} </MainTitle> 
)

export const GroupArea = ({title, components})=>(
  <>
    <SectionTitle title={title} /> 
    <VerticalMainBlock>
      <GroupBlock>
      { components }
      </GroupBlock>
    </VerticalMainBlock> 
  </>
)
