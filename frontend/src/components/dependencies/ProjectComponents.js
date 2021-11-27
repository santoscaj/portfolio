import React,{useEffect, useState} from 'react'
import { VerticalBlock, HorizontalBlock, BoldHeader1, InfoArea } from './GeneralComponents'
import defaultImage from '../../images/no-image.png'
import styled from 'styled-components'
import { useGet } from '../../utils/Hooks'
import BackendEndpoint from '../../api.config.js'
import {TransitionGroup} from 'react-transition-group'; 

const ProjectName = BoldHeader1

const link = `
border-radius: 4px;
padding: 4px;
text-decoration: none;
`

const GithubBtn = styled.a`
border: 2px solid red;
${link}
`
const DemoBtn = styled.a`
border: 2px solid green;
${link}
`

const Image = styled.img`
width: 328px;
height: 150px;
border: 1px solid darkblue;
`

const FlexDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center
`

const ProjectLink = styled.a`
  ,:visited{
    color: black;
    padding: 2px;
    margin: 5px;
    border: 1px solid black;
    width: 100px;
    text-decoration: none;
    text-align: center;
    font-weight: 400;
    border-radius: 3px;
  }
`

const MoreBtn = styled.button`
  width: 50px;
  font-size: 11px;
  height: 22px;
  padding: 1px;
  font-weight: 500;
  border: 1px solid orange;
  border-radius: 3px;
  outline: none;
  cursor:pointer;
  background: white;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  :hover{
    animation-name: bounce
  }
`

const MoreArea = ({toggle, more})=>(
  <div style={{display:'flex', justifyContent:'center'}}>
    {more? <MoreBtn onClick={toggle}> less </MoreBtn> : <MoreBtn onClick={toggle}> more </MoreBtn> }
  </div>
)

const ProjectInfoArea = ({description})=>{
  return (
    <InfoArea>
          <div> {description} </ div> 
    </InfoArea>
  )
}

const ProjectLinks = ({link, github})=>{
  let LinkClass = (!!link) ? '' : 'disabled-link'
  let GithubClass = (!!github) ? '' : 'disabled-github'
  return (
    <FlexDiv>
      <ProjectLink className={LinkClass} style={{borderColor:'tomato'}} href={link} target="_blank" > demo </ProjectLink>
      <ProjectLink className={GithubClass} style={{borderColor:'teal'}} href={github} target="_blank"> github </ProjectLink>
    </FlexDiv>
  )
}

const MoreInfo = ({more, toggle, fullDescription})=>{
  // if(more) className+= ' full-size-info'
  // className=''
  let className = 'resizeable-info'
  return (
  <VerticalBlock>
    <MoreArea toggle={toggle} more={more} />
    {more && 
    <TransitionGroup transition="resize" 
      transitionEnterTimeout={20000}
      transitionLeaveTimeout={20000}
    >
      <InfoArea className={className}>
          <div> {fullDescription} </ div> 
      </InfoArea>   
    </TransitionGroup>
    }
  </VerticalBlock>
)}

export const ProjectTab = ({project})=>{
  const [projectImage, setProjectImage] = useState(defaultImage)
  const [more, setMore] = useState(false)

  function toggleFullDescription(){
    setMore(!more)
  }

  useGet(`${BackendEndpoint.image}/${project.image}`, true)
    .then(answer=>{
      if(answer.data){
        setProjectImage(answer.data)
      }
    }).catch(e=>{
      console.error(e)
    })

  return (
    <VerticalBlock>
    <HorizontalBlock>
      <ProjectName> { project.name } </ProjectName>    
    </HorizontalBlock>
    <HorizontalBlock>
      <VerticalBlock>
        <div >  <Image src={projectImage} ></Image> </div>
      </VerticalBlock>
      <VerticalBlock style={{border:'1px solid red', width: '100%'}}>
        <ProjectInfoArea description={project.description} />
        <MoreInfo fullDescription={project.fullDescription} more={more} toggle={toggleFullDescription} />
        <ProjectLinks link={project.link} github={project.githubLink}/>
      </VerticalBlock>
    </HorizontalBlock>
    </VerticalBlock>
  )
}


