import React,{useState} from 'react'
// import styled from 'styled-components'
import { useGet } from '../utils/API'
import {ActionButtons, BoldHeader3, TextArea,  VerticalBlock, Skills, HorizontalGroup, FlexRowStretch, VerticalMainlBlock, MiniDelete, MiniSave} from './dependencies/GeneralComponentsAdmin'

const Responsabilities= ({responsabilities})=>(
  <> 
  <BoldHeader3>Responsabilities:</BoldHeader3>
  {responsabilities && Array.from(responsabilities, responsability=>(
    <FlexRowStretch key={responsability}>
      <TextArea rows={1} cols={140} defaultValue={responsability}></TextArea >
      <MiniDelete >x</MiniDelete>
    </FlexRowStretch>
  ))}
  <FlexRowStretch>
  <TextArea rows={1} cols={140} ></TextArea >
    <MiniSave >+</MiniSave>
  </FlexRowStretch>
  </>
)



const CareerBlock = ({career})=>(
  <VerticalBlock>
    <HorizontalGroup property="id" value={career._id}  disabled={true} />
    <HorizontalGroup property="company" value={career.company} />
    <HorizontalGroup property="order" value={career.order} />
    <HorizontalGroup property="position" value={career.position} />
    <HorizontalGroup property="startDate" value={career.startDate} />
    <HorizontalGroup property="endDate" value={career.endDate} />
    <Responsabilities responsabilities={career.responsabilities}/>
    <Skills skills={career.skills}/>
    <ActionButtons/>
  </VerticalBlock>
)

const CareerAdmin = ()=>{
  const [careers, setCareer ] = useState(null)

  useGet('http://localhost:8000/careers')
  .then(answer=>{
    setCareer(answer.data)
  }).catch(e=>{
    console.error(e)
  })

  return (
    <VerticalMainlBlock>  
      {
      careers && Array.from(careers, career=>(
        <CareerBlock key={career._id} career={career}  />
        ))
      }      

    </VerticalMainlBlock>
  )}
  
  export default CareerAdmin