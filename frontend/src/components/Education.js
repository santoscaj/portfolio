import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
// import styled from 'styled-components'
import { useFetch } from '../utils/API'
import CareerTab from './dependencies/CareerComponents'


const Career = ()=>{
const [careers, setCareer] = useState([])

useFetch('http://localhost:8000/careers')
  .then(answer=>{
    setCareer(answer.data)
    console.log(careers)
  }).catch(e=>{
    console.log(e)
  })

return (
  <>
    <SectionTitle title="Careers" />
    {careers && Array.from(careers ,career=>(
      <CareerTab career={career} key={career.id} />
    ))}
  </>
)}

export default Career