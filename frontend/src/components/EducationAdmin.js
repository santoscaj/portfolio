import React,{useState} from 'react'
import { useGet } from '../utils/API'
// import {ActionButtons, VerticalBlock, VerticalMainBlock } from './dependencies/GeneralComponentsAdmin'
import {ActionButtons, HorizontalBlock, BoldHeader3, VerticalBlock, VerticalMainBlock } from './dependencies/GeneralComponentsAdmin'

const HorizontalGroup = ({property, value, disabled, onChange})=>{
  
  return (
    <HorizontalBlock> 
      <BoldHeader3> {property} </BoldHeader3> 
      <input disabled={disabled} defaultValue={value} />
    </HorizontalBlock>
  )
}


const EducationBlock = ({education})=>{
  const [tempEducation, setTempEducation] = useState(education)
  const changeTemporaryEducation = (property, value)=>{
    setTempEducation(prev=> ({...prev, [property]: value}))
  }
  
  return (
    <VerticalBlock>
      <HorizontalGroup property="id" value={tempEducation._id} onChange={e=>changeTemporaryEducation('id',e.target.value)} disabled={true} />
      <HorizontalGroup property="institution" value={tempEducation.institution} onChange={e=>changeTemporaryEducation('institution',e.target.value)} />
      <HorizontalGroup property="order" value={tempEducation.order} onChange={e=>changeTemporaryEducation('order',e.target.value)} />
      <HorizontalGroup property="degree" value={tempEducation.degree} onChange={e=>changeTemporaryEducation('degree',e.target.value)} />
      <HorizontalGroup property="field" value={tempEducation.field} onChange={e=>changeTemporaryEducation('field',e.target.value)} />
      <HorizontalGroup property="gpa" value={tempEducation.gpa} onChange={e=>changeTemporaryEducation('gpa',e.target.value)} />
      <HorizontalGroup property="focus" value={tempEducation.focus} onChange={e=>changeTemporaryEducation('focus',e.target.value)} />
      <HorizontalGroup property="startDate" value={tempEducation.startDate} onChange={e=>changeTemporaryEducation('startDate',e.target.value)} />
      <HorizontalGroup property="endDate" value={tempEducation.endDate} onChange={e=>changeTemporaryEducation('endDate',e.target.value)} />
      <HorizontalGroup property="link" value={tempEducation.link} onChange={e=>changeTemporaryEducation('link',e.target.value)} />
      <ActionButtons/>
    </VerticalBlock>
  )
}

const EducationAdmin = ()=>{
  const [educations, setEducation ] = useState(null)

  useGet('http://localhost:8000/educations')
  .then(answer=>{
    setEducation(answer.data)
  }).catch(e=>{
    console.error(e)
  })

  return (
    <VerticalMainBlock>  
      {
      educations && Array.from(educations, education=>(
        <EducationBlock key={education._id} education={education}  />
        ))
      }      

    </VerticalMainBlock>
  )}
  
  export default EducationAdmin