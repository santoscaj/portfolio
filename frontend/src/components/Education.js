import React, { useState } from 'react'
import { IndividualBlock, GroupArea} from './dependencies/GeneralComponents'
// import styled from 'styled-components'
import { useFetch } from '../utils/API'
import {EducationTab, CertificationTab} from './dependencies/EducationComponents'


const Career = ()=>{
const [educations, setEducation] = useState([])
const [certifications, setCertifications] = useState([])

useFetch('http://localhost:8000/educations')
  .then(answer=>{
    setEducation(answer.data)
  }).catch(e=>{
    console.error(e)
  })
  
useFetch('http://localhost:8000/certifications')
.then(answer=>{
  setCertifications(answer.data)
  console.log(answer.data)
  }).catch(e=>{
    console.error(e)
  })

  let educationComponents = educations && Array.from(educations, education=>(
    <IndividualBlock key={education.id} >
      <EducationTab education={education} />
    </IndividualBlock> || []
  ))
  
  let certificationComponents = certifications && Array.from(certifications, certification=>(
    <IndividualBlock key={certification.id} >
      <CertificationTab certification={certification} />
    </IndividualBlock>  
  ))
  

  return (
    <>
    <GroupArea title="Certifications" components={certificationComponents}/>
    <GroupArea title="Education" components={educationComponents}/>
    </>
  )
}


export default Career