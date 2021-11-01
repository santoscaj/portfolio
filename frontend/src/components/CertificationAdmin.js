import React,{useState} from 'react'
import { useGet } from '../utils/API'
import {ActionButtons,HorizontalGroup, VerticalIndividualBlock, VerticalMainBlock } from './dependencies/GeneralComponentsAdmin'
import BackendEndpoint from '../api.config.js'

const CertificationBlock = ({certification})=>{
  const [tempCertification, setTempCertification] = useState(certification)
  const changeTemporaryCertification = (property, value)=>{
    setTempCertification(prev=> ({...prev, [property]: value}))
  }
  
  const discardFunction = ()=>{console.log('discarding')}
  const saveFunction =()=>{console.log('saving')}
  const deleteFunction =()=>{console.log('deleting')}

  return (
    <VerticalIndividualBlock>
      <HorizontalGroup property="id" value={tempCertification._id} onChange={e=>changeTemporaryCertification('id', e.target.value)} disabled={true} />
      <HorizontalGroup property="institution" value={tempCertification.institution} onChange={e=>changeTemporaryCertification('institution', e.target.value)} />
      <HorizontalGroup property="order" value={tempCertification.order} onChange={e=>changeTemporaryCertification('order', e.target.value)} />
      <HorizontalGroup property="degree" value={tempCertification.degree} onChange={e=>changeTemporaryCertification('degree', e.target.value)} />
      <HorizontalGroup property="endDate" value={tempCertification.endDate} onChange={e=>changeTemporaryCertification('endDate', e.target.value)} />
      <HorizontalGroup property="link" value={tempCertification.link} onChange={e=>changeTemporaryCertification('link', e.target.value)} />
      <ActionButtons onDiscard={discardFunction} onSave={saveFunction} onDelete={deleteFunction}  />
    </VerticalIndividualBlock>
  )
}


const CertificationAdmin = ()=>{
  const [certifications, setCertification ] = useState(null)

  useGet(BackendEndpoint.certification)
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