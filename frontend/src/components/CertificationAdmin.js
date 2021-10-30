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

const CertificationBlock = ({certification})=>(
  <VerticalBlock>
    <HorizontalGroup property="id" value={certification._id} disabled={true} />
    <HorizontalGroup property="institution" value={certification.institution} />
    <HorizontalGroup property="order" value={certification.order} />
    <HorizontalGroup property="degree" value={certification.degree} />
    <HorizontalGroup property="endDate" value={certification.endDate} />
    <HorizontalGroup property="link" value={certification.link} />
    <ActionButtons/>
  </VerticalBlock>
)

const CertificationAdmin = ()=>{
  const [certifications, setCertification ] = useState(null)

  useGet('http://localhost:8000/certifications')
  .then(answer=>{
    setCertification(answer.data)
  }).catch(e=>{
    console.error(e)
  })

  return (
    <VerticalMainBlock>  
      {
      certifications && Array.from(certifications, certification=>(
        <CertificationBlock key={certification._id} certification={certification}  />
        ))
      }      

    </VerticalMainBlock>
  )}
  
  export default CertificationAdmin