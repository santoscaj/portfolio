import React,{useState} from 'react'
// import styled from 'styled-components'
import { useGet } from '../utils/API'
// import {ActionButtons,  VerticalBlock, Skills, VerticalMainBlock, HorizontalGroupTextArea} from './dependencies/GeneralComponentsAdmin'
import {ActionButtons, Skills,  HorizontalGroupTextArea, HorizontalBlock, BoldHeader3, VerticalBlock, VerticalMainBlock } from './dependencies/GeneralComponentsAdmin'

const HorizontalGroup = ({property, value, disabled, onChange})=>{
  
  return (
    <HorizontalBlock> 
      <BoldHeader3> {property} </BoldHeader3> 
      <input disabled={disabled} defaultValue={value} />
    </HorizontalBlock>
  )
}

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
    <VerticalMainBlock>  
      {
      projects && Array.from(projects, project=>(
        <ProjectBlock key={project._id} project={project}  />
        ))
      }      

    </VerticalMainBlock>
  )}
  
  export default ProjectAdmin