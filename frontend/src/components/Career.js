import React, { useState } from 'react'
import {IndividualBlock, GroupArea } from './dependencies/GeneralComponents'
// import styled from 'styled-components'
import { useGet } from '../utils/Hooks'
import CareerTab from './dependencies/CareerComponents'
import BackendEndpoint from '../api.config.js'

const Career = ()=>{
const [careers, setCareer] = useState([])

useGet(BackendEndpoint.career)
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