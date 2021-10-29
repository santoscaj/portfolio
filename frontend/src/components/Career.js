import React, { useState } from 'react'
import {IndividualBlock, GroupArea } from './dependencies/GeneralComponents'
// import styled from 'styled-components'
import { useGet } from '../utils/API'
import CareerTab from './dependencies/CareerComponents'


const Career = ()=>{
const [careers, setCareer] = useState([])

useGet('http://localhost:8000/careers')
  .then(answer=>{
    setCareer(answer.data)
  }).catch(e=>{
    console.error(e)
  })

let careerArray = careers && Array.from(careers, career=>(
  <IndividualBlock key={career._id}>
    <CareerTab career={career} />
  </IndividualBlock>
))

return (
  <GroupArea title="Career" components={careerArray}/>
)}


export default Career