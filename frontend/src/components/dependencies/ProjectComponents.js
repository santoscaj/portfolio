import React,{useEffect, useState} from 'react'
import { VerticalBlock, HorizontalBlock, BoldHeader1 } from './GeneralComponents'
import defaultImage from '../../images/no-image.png'
import styled from 'styled-components'
// import { useGet } from '../../utils/Hooks'
// import BackendEndpoint from '../../api.config.js'
import {TransitionGroup} from 'react-transition-group'; 

import menapageImage from '../../images/serverless/menapage.png'
import todolistImage from '../../images/serverless/todolist.png'
import portfolioImage from '../../images/serverless/portfolio.png'
import ticketImage from '../../images/serverless/ticket.png'
import opuschecksImage from '../../images/serverless/opuschecks.png'

let projectImages = {
  'todolist.png'   : todolistImage,
  'ticket.png'     : ticketImage,
  'portfolio.png'  : portfolioImage,
  'opuschecks.png' : opuschecksImage,
  'menapage.png'   : menapageImage
}

const ProjectName = BoldHeader1

const link = `
border-radius: 4px;
padding: 4px;
text-decoration: none;
`

const Image = styled.img`
width: 328px;
height: 150px;
border: 1px solid darkblue;

@media only screen and (max-width: 600px){
  display: none
}
`

const FlexDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center
`

const ProjectLink = styled.a`
  ,:visited{
    color: black;
    padding: 1px;
    margin: 5px;
    // border: 1px solid black;
    width: 100px;
    font-size: 10px;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
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

  @media only screen and (max-width: 800px){
    display: none
  }
`
const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  min-height: 70px;
  height: auto;
  width: 100%;
  flex: 1 1 auto;
  *>{
    margin: 2px
  }
`

const MoreArea = ({toggle, more})=>(
  <div style={{display:'flex', justifyContent:'center'}}>
    {more? <MoreBtn onClick={toggle}> less </MoreBtn> : <MoreBtn onClick={toggle}> more </MoreBtn> }
  </div>
)

// ProjectInfoArea

const ProjectLinks = ({link, github})=>{
  let LinkClass = (!!link) ? 'link-class' : 'link-class disabled-link'
  let GithubClass = (!!github) ? 'github-class' : 'github-class disabled-github'
  return (
    <FlexDiv>
      <ProjectLink className={LinkClass} href={link} target="_blank" > demo </ProjectLink>
      <ProjectLink className={GithubClass} href={github} target="_blank"> github </ProjectLink>
    </FlexDiv>
  )
}

const ProjectInfoArea = ({more, toggle, fullDescription, description})=>{
  // className=''
  let className = 'resizeable-info'
  if(more) className+= ' full-size-info'
  return (
  <VerticalBlock>
    {/* <TransitionGroup transition="resize" 
      transitionEnterTimeout={20000}
      transitionLeaveTimeout={20000}
      > */}
      <InfoArea>
        <p>{description}</p>
        {more && 
          <p className={className}> {fullDescription} </ p> 
        }
      </InfoArea>   
    {/* </TransitionGroup> */}
    <MoreArea toggle={toggle} more={more} />
  </VerticalBlock>
)}

export const ProjectTab = ({project})=>{
  const [projectImage, setProjectImage] = useState(projectImages[project.image])
  const [more, setMore] = useState(false)

  function toggleFullDescription(){
    setMore(!more)
  }

  // useGet(`${BackendEndpoint.image}/${project.image}`, true)
  //   .then(answer=>{
  //     if(answer.data){
  //       setProjectImage(answer.data)
  //     }
  //   }).catch(e=>{
  //     console.error(e)
  //   })

  return (
    <VerticalBlock>
      <HorizontalBlock>
        <ProjectName> { project.name } </ProjectName>    
      </HorizontalBlock>
      <HorizontalBlock>
        {/* <VerticalBlock> */}
          <div style={{alignSelf:'flex-start'}} >  
            <Image src={projectImage} ></Image> 
            <ProjectLinks link={project.link} github={project.githubLink}/>
          </div>
        {/* </VerticalBlock>/ */}
        {/* <VerticalBlock style={{display:'flex', alignItems:'fex-start',border:'1px solid red', width: '100%',alignSelf:'flex-start' }}> */}
        <VerticalBlock style={{padding: 0 ,width: '100%',alignSelf:'flex-start' }}>
          {/* <ProjectInfoArea /> */}
          <ProjectInfoArea description={project.description} fullDescription={project.fullDescription} more={more} toggle={toggleFullDescription} />
        </VerticalBlock>
      </HorizontalBlock>
    </VerticalBlock>
  )
}


