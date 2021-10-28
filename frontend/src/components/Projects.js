import React, { useState } from 'react'
import { IndividualBlock, GroupArea} from './dependencies/GeneralComponents'
// import styled from 'styled-components'
import { useFetch } from '../utils/API'
import {ProjectTab} from './dependencies/ProjectComponents'


const Career = ()=>{
const [projects, setProjects] = useState([])

useFetch('http://localhost:8000/projects')
  .then(answer=>{
    setProjects(answer.data)
  }).catch(e=>{
    console.error(e)
  })
  

let projectArray = projects && Array.from(projects, project=>(
  <IndividualBlock key={project.id} >
    <ProjectTab project={project} />
  </IndividualBlock>
))

return (
  <GroupArea title="Projects" components={projectArray}/>
)}

export default Career