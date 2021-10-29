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
  margin: 5px;

`

export const ActionButtons = ()=>(
  <FlexRow>
    <Discard></Discard>
    <Save></Save>
    <Delete></Delete>
  </FlexRow>
)

export const Discard = ()=>(
  <Button  style={{borderColor :'orange', cursor: 'pointer'}}>Discard</Button>
)

export const Save = ()=>(
  <Button style={{borderColor :'green', cursor: 'pointer'}}>Save</Button>
)

export const Delete = ()=>(
  <Button style={{borderColor :'red', cursor: 'pointer'}}>Delete</Button>
)

export const TextArea = styled.textarea`
  border: 1px solid lightgray
`


export const Skills= ({skills})=>(
  <> 
  <BoldHeader3>Skills:</BoldHeader3>
  {skills && Array.from(skills, skill=>(
     <VerticalBlock key={skill._id}>
      <HorizontalGroup property="id" value={skill._id} disabled={true} />
      <HorizontalGroup property="company" value={skill.name} />
      <HorizontalGroup property="keywords" value={skill.keywords} />
      <HorizontalGroup property="position" value={skill.detail} />
      <MiniDelete >x</MiniDelete>
     </VerticalBlock>
  ))}
  <VerticalBlock>
    <HorizontalGroup property="company" value="" />
    <HorizontalGroup property="order" value="" />
    <HorizontalGroup property="position" value="" />
    <MiniSave >+</MiniSave>
    </VerticalBlock>
  </>
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

export const FlexRowStretch = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: 100%;
`

export const VerticalMainlBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  align-items: stretch;
  margin: auto;
`

export const MiniDelete = styled.button`
    width: 25px;
    height: 25px;
    font-weight: 900;
    border-radius: 50%;
    margin-left: 3px;
    background: white;
    border: 2px solid red;
    color: red;
    cursor: pointer;
    :hover{
      background: red;
      color: white;
    }
    `
    export const MiniSave = styled.button`
    width: 25px;
    height: 25px;
    font-weight: 900;
    margin-left: 3px;
    border-radius: 50%;
    background: white;
    border: 2px solid green;
    color: green;
    cursor: pointer;
    :hover{
      background: green;
      color: white;
    }
`

export const HorizontalGroup = ({property, value, disabled})=>(
  <HorizontalBlock> 
    <BoldHeader3> {property} </BoldHeader3> 
    <input disabled={disabled} defaultValue={value} />
  </HorizontalBlock>
)
 
HorizontalGroup.defaultProps ={
  property: null,
  value: null, 
  disabled: false
}


export const HorizontalGroupTextArea = ({property, value})=>(
  <HorizontalBlock> 
    <BoldHeader3> {property} </BoldHeader3> 
    <input defaultValue={value} />
  </HorizontalBlock>
)
 