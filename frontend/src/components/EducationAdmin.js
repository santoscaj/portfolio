import React,{useState} from 'react'
import { useGet } from '../utils/API'
import {ActionButtons, VerticalBlock, HorizontalGroup, VerticalMainlBlock } from './dependencies/GeneralComponentsAdmin'



const EducationBlock = ({education})=>(
  <VerticalBlock>
    <HorizontalGroup property="id" value={education._id} disabled={true} />
    <HorizontalGroup property="institution" value={education.institution} />
    <HorizontalGroup property="order" value={education.order} />
    <HorizontalGroup property="degree" value={education.degree} />
    <HorizontalGroup property="field" value={education.field} />
    <HorizontalGroup property="gpa" value={education.gpa} />
    <HorizontalGroup property="focus" value={education.focus} />
    <HorizontalGroup property="startDate" value={education.startDate} />
    <HorizontalGroup property="endDate" value={education.endDate} />
    <HorizontalGroup property="link" value={education.link} />
    <ActionButtons/>
  </VerticalBlock>
)

const EducationAdmin = ()=>{
  const [educations, setEducation ] = useState(null)

  useGet('http://localhost:8000/educations')
  .then(answer=>{
    setEducation(answer.data)
  }).catch(e=>{
    console.error(e)
  })

  return (
    <VerticalMainlBlock>  
      {
      educations && Array.from(educations, education=>(
        <EducationBlock key={education._id} education={education}  />
        ))
      }      

    </VerticalMainlBlock>
  )}
  
  export default EducationAdmin