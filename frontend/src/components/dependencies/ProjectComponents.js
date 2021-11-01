import React,{useEffect, useState} from 'react'
import { VerticalBlock, HorizontalBlock, BoldHeader1, InfoArea } from './GeneralComponents'
import defaultImage from '../../images/no-image.png'
import styled from 'styled-components'
import { useGet } from '../../utils/API'
import BackendEndpoint from '../../api.config.js'


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

export const ProjectTab = ({project})=>{
  const [projectImage, setProjectImage] = useState(defaultImage)

  useGet(`${BackendEndpoint.image}/${project.image}`, true)
    .then(answer=>{
      // var binaryData = [];
      // binaryData.push(data);
      // window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))
      // console.log(answer)
      if(answer.data){
        // let image = window.URL.createObjectURL(answer.data)
        
        console.log(answer.data)
        setProjectImage(URL.createObjectURL(answer.data))
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
      <InfoArea>
        <div> {project.description} </ div> 
      </InfoArea>
      <VerticalBlock>
        <div ><img src={projectImage} ></img></div>
        {/* <HorizontalBlock>
          <GithubBtn href={project.githubLink}  target="_blank" >Github</GithubBtn>
          <DemoBtn href={project.link}  target="_blank" >Demo</DemoBtn>
        </HorizontalBlock>  */}
      </VerticalBlock>
    </HorizontalBlock>
    </VerticalBlock>
  )
}


