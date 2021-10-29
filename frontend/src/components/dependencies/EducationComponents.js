import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { VerticalBlock, HorizontalBlock, BoldHeader1, ItalicHeader2, InfoArea } from './GeneralComponents'

function getTime(endDate, startDate){
  let end = moment.unix((endDate))
  return end.format('MMMM YYYY');
}

const Institute =  BoldHeader1
const Time = ItalicHeader2
const SmallDiv = styled.div`
  font-size: 14px;
  font-color: darkgray
`

export const CertificationTab = ({certification})=>(
  <VerticalBlock>
    <HorizontalBlock>
      <Institute> {certification.institution}</Institute>
      <Time> {getTime(certification.endDate)}</Time>
    </HorizontalBlock>
    <InfoArea>
      <div>{certification.degree}</div>
    </InfoArea>
  </VerticalBlock>
)

export const EducationTab = ({education})=>(
  <VerticalBlock>
  <HorizontalBlock>
    <Institute> {education.institution}</Institute>
    <Time> {getTime(education.endDate)}</Time>
  </HorizontalBlock>
  <InfoArea>
    <div>{education.degree}</div>
    <div>{education.field}</div>
    <SmallDiv>( {education.gpa} GPA ) </SmallDiv>
  </InfoArea>
  </VerticalBlock>
)
