import React from 'react'
import { VerticalBlock, HorizontalBlock, BoldHeader1, InfoArea } from './GeneralComponents'

const ProjectName = BoldHeader1

export const ProjectTab = ({project})=>(
  <VerticalBlock>
  <HorizontalBlock>
    <ProjectName> { project.name } </ProjectName>    
  </HorizontalBlock>
  <InfoArea>
    <div> {project.description} </ div> 
  </InfoArea>
  </VerticalBlock>
)
