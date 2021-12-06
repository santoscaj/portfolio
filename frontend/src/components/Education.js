import React, { useState } from 'react'
import { IndividualBlock, GroupArea} from './dependencies/GeneralComponents'
// import styled from 'styled-components'
// import { useGet } from '../utils/Hooks'
import {EducationTab, CertificationTab} from './dependencies/EducationComponents'
// import BackendEndpoint from '../api.config.js'
import { educationData, certificationData } from '../utils/serverlessData'
import styled from 'styled-components'


const Anchor =styled.a`
,:visited{
  color: black;
  text-decoration: none;
  text-align: center;
}
`

const Career = ()=>{
const [educations, setEducation] = useState(educationData)
const [certifications, setCertifications] = useState(certificationData)

// useGet(BackendEndpoint.education)
//   .then(answer=>{
//     setEducation(answer.data)
//   }).catch(e=>{
//     // console.error(e)
//   })
  
// useGet(BackendEndpoint.certification)
// .then(answer=>{
//   setCertifications(answer.data)
//   }).catch(e=>{
//     // console.error(e)
//   })

  let educationComponents = educations && Array.from(educations, education=>(
    <IndividualBlock key={education._id} >
      <EducationTab education={education} />
    </IndividualBlock> || []
  ))
  
  let certificationComponents = certifications && Array.from(certifications, certification=>(
    <IndividualBlock key={certification._id} >
      <Anchor style={{cursor:'pointer'}} href={certification.link} target="_blank" >
        <CertificationTab certification={certification} />
      </Anchor>
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