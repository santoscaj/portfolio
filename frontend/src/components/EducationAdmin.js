import React,{useState} from 'react'
import { useGet } from '../utils/API'
import {Discard, Save, Delete, VerticalBlock, HorizontalGroup, FlexRow } from './dependencies/GeneralComponentsAdmin'




const EducationBlock = ({education})=>(
  <VerticalBlock>
    <HorizontalGroup property="id" value={education.id} />
    <HorizontalGroup property="institution" value={education.institution} />
    {/* <HorizontalGroup property="position" value={education.position} /> */}
    <HorizontalGroup property="degree" value={education.degree} />
    <HorizontalGroup property="field" value={education.field} />
    <HorizontalGroup property="gpa" value={education.gpa} />
    <HorizontalGroup property="focus" value={education.focus} />
    <HorizontalGroup property="endDate" value={education.endDate} />
    <HorizontalGroup property="link" value={education.link} />
    <FlexRow>
      <Discard></Discard>
      <Save></Save>
      <Delete></Delete>
    </FlexRow>
  </VerticalBlock>
)

const EducationAdmin = ()=>{
  const [educations, setEducation ] = useState(null)
  const [certifications, setCertification ] = useState(null)

  useGet('http://localhost:8000/educations')
  .then(answer=>{
    setEducation(answer.data)
    console.log(answer.data)
  }).catch(e=>{
    console.error(e)
  })

  return (
    <div> Education Admin 
      {
      educations && Array.from(educations, education=>(
        <EducationBlock key={education.id} education={education}  />
        ))
      }      

    </div>
  )}
  
  export default EducationAdmin