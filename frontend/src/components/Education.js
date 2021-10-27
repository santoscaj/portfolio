import React, { useState } from 'react'
import {SectionTitle} from './dependencies/GeneralComponents'
// import styled from 'styled-components'
import { useFetch } from '../utils/API'
import {EducationTab, CertificationTab} from './dependencies/EducationComponents'


const Career = ()=>{
const [educations, setEducation] = useState([])
const [certifications, setCertifications] = useState([])

useFetch('http://localhost:8000/educations')
  .then(answer=>{
    setEducation(answer.data)
    console.log(answer.data)
  }).catch(e=>{
    console.log(e)
  })
  
useFetch('http://localhost:8000/certifications')
.then(answer=>{
  setCertifications(answer.data)
  }).catch(e=>{
    console.log(e)
  })

return (
  <>
    <SectionTitle title="Certifications" />
    {certifications && Array.from(certifications ,certification=>(
      <CertificationTab certification={certification} key={certification.id} />
    ))}
    <SectionTitle title="Education" />
    {educations && Array.from(educations ,education=>(
      <EducationTab education={education} key={education.id} />
    ))}
  </>
)}

export default Career