import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { VerticalBlock, HorizontalBlock, BoldHeader1, InfoArea } from './GeneralComponents'


function getTime(endDate, startDate){
  let end = moment.unix((endDate))
  return end.format('MMMM YYYY');
}

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
