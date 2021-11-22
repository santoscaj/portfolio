import React, { useState } from 'react'
import { IndividualBlock, GroupArea} from './dependencies/GeneralComponents'
// import styled from 'styled-components'
import { useGet } from '../utils/Hooks'
import {ProjectTab} from './dependencies/ProjectComponents'
import BackendEndpoint from '../api.config.js'


const Career = ()=>{
const [projects, setProjects] = useState([])

useGet(BackendEndpoint.project)
  .then(answer=>{
    setProjects(answer.data)
  }).catch(e=>{
    console.error(e)
  })
  

let projectArray = projects && Array.from(projects, project=>(
  <IndividualBlock key={project._id} >
    <ProjectTab project={project} />
  </IndividualBlock>
))

return (
  <GroupArea title="Projects" components={projectArray}/>
)}

export default Career