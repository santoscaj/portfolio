import React, {useState} from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';


const Button = styled.button`
  border: 1px solid gray;
  border-radius: 5px;
  width: 60px;
  height: 30px;
  margin: 5px;
`

export const VerticalIndividualBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid darkgray;
  margin: 15px;
  :hover{
    border: 2px solid gray;
  }
`

export const VerticalBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 5px;`



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


export const Skills= ({skills, onChange})=>{
  const updateSkillParent = (id, property, value) =>{
    onChange(skills.map(skill=>skill._id==id? {...skill, [property]:value}: skill))
  }

  const [name, setName] = useState('')
  const [keywords, setKeywords] = useState('')
  const [detail, setDetail] = useState('')

  const addSkill = ()=>{
    if(!name || !keywords || !detail) return alert('Please fill out all skill fields')
    let _id = uuidv4()
    onChange([...skills, {_id, name, keywords, detail}])
    setName('')
    setKeywords('')
    setDetail('')
  }

  return (
    <> 
    <BoldHeader3>Skills:</BoldHeader3>
    {skills && Array.from(skills, skill=>(
       <VerticalBlock key={skill._id}>
        <HorizontalGroup property="id" value={skill._id} disabled={true} onChange={e=>updateSkillParent(skill._id, 'id',e.target.value)}/>
        <HorizontalGroup property="name" value={skill.name} onChange={e=>updateSkillParent(skill._id, 'name',e.target.value)}/>
        <HorizontalGroup property="keywords" value={skill.keywords} onChange={e=>updateSkillParent(skill._id, 'keywords',e.target.value)}/>
        <HorizontalGroup property="detail" value={skill.detail} onChange={e=>updateSkillParent(skill._id, 'detail',e.target.value)}/>
        <MiniDelete >x</MiniDelete>
       </VerticalBlock>
    ))}
    <VerticalBlock>
      <HorizontalGroup property="name" value={name} onChange={e=>setName(e.target.value)}/>
      <HorizontalGroup property="keywords" value={keywords} onChange={e=>setKeywords(e.target.value)} />
      <HorizontalGroup property="detail" value={detail} onChange={e=>setDetail(e.target.value)} />
      <MiniSave onClick={addSkill} >+</MiniSave>
      </VerticalBlock>
    </>
  )
}

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

export const VerticalMainBlock = styled.div`
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

export const HorizontalGroup = ({property, value, disabled, onChange})=>{
  return (
    <HorizontalBlock> 
      <BoldHeader3> {property} </BoldHeader3> 
      <input disabled={disabled} value={value} onChange={onChange} />
    </HorizontalBlock>
  )}
 
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
 