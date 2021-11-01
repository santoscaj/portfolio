import React,{useState} from 'react'
import BackendEndpoint from '../api.config'
import { useGet } from '../utils/API'
import {ActionButtons, Skills,VerticalIndividualBlock,  HorizontalGroup ,HorizontalGroupTextArea, VerticalMainBlock } from './dependencies/GeneralComponentsAdmin'

const ProjectBlock = ({project})=>{
  
  const [tempProject, setTempProject] = useState(project)
  const changeTemporaryProject = (property, value)=>{
    setTempProject(prev=> ({...prev, [property]: value}))
  }
  const discardFunction = ()=>{console.log('discarding')}
  const saveFunction =()=>{console.log('saving')}
  const deleteFunction =()=>{console.log('deleting')}
  return (
    <VerticalIndividualBlock>
      <HorizontalGroup property="id" value={tempProject._id} onChange={e=>changeTemporaryProject('id',e.target.value)}  disabled={true} />
      <HorizontalGroup property="order" value={tempProject.order} onChange={e=>changeTemporaryProject('order',e.target.value)} />
      <HorizontalGroup property="name" value={tempProject.name} onChange={e=>changeTemporaryProject('name',e.target.value)} />
      <HorizontalGroup property="description" value={tempProject.description} onChange={e=>changeTemporaryProject('description',e.target.value)} />
      <HorizontalGroup property="image" value={tempProject.image} onChange={e=>changeTemporaryProject('image',e.target.value)} />
      <HorizontalGroup property="link" value={tempProject.link} onChange={e=>changeTemporaryProject('link',e.target.value)} />
      <HorizontalGroup property="githubLink" value={tempProject.githubLink} onChange={e=>changeTemporaryProject('githubLink',e.target.value)} />
      <HorizontalGroupTextArea property="fullDescription" value={tempProject.fullDescription} onChange={e=>changeTemporaryProject('fullDescription',e.target.value)} />
      <Skills skills={tempProject.skills} onChange={newSkill=>changeTemporaryProject('skills', newSkill)}/>
      <ActionButtons onDiscard={discardFunction} onSave={saveFunction} onDelete={deleteFunction}  />
    </VerticalIndividualBlock>
  )
}

const ProjectAdmin = ()=>{
  const [projects, setProject ] = useState(null)

  useGet(BackendEndpoint.project)
  .then(answer=>{
    setProject(answer.data)
  }).catch(e=>{
    console.error(e)
  })

  return (
    <VerticalMainBlock>  
      { projects && Array.from(projects, project=>(
        <ProjectBlock key={project._id} project={project}  />
        ))}      
    </VerticalMainBlock>
  )}
  
  export default ProjectAdmin