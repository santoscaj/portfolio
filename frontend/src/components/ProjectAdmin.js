import React,{useState} from 'react'
// import styled from 'styled-components'
import { useGet } from '../utils/API'
import {ActionButtons,  VerticalBlock, Skills, HorizontalGroup, VerticalMainlBlock, HorizontalGroupTextArea} from './dependencies/GeneralComponentsAdmin'


const ProjectBlock = ({project})=>(
  <VerticalBlock>
    <HorizontalGroup property="id" value={project._id}  disabled={true} />
    <HorizontalGroup property="order" value={project.order} />
    <HorizontalGroup property="name" value={project.name} />
    <HorizontalGroup property="description" value={project.description} />
    <HorizontalGroup property="image" value={project.image} />
    <HorizontalGroup property="link" value={project.link} />
    <HorizontalGroup property="githubLink" value={project.githubLink} />
    <HorizontalGroupTextArea property="fullDescription" value={project.fullDescription} />
    <Skills skills={project.skills}/>
    <ActionButtons/>
  </VerticalBlock>
)

const ProjectAdmin = ()=>{
  const [projects, setProject ] = useState(null)

  useGet('http://localhost:8000/projects')
  .then(answer=>{
    setProject(answer.data)
  }).catch(e=>{
    console.error(e)
  })

  return (
    <VerticalMainlBlock>  
      {
      projects && Array.from(projects, project=>(
        <ProjectBlock key={project._id} project={project}  />
        ))
      }      

    </VerticalMainlBlock>
  )}
  
  export default ProjectAdmin