import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { VerticalBlock, HorizontalBlock } from './GeneralComponents'

function getTime(endDate, startDate){
  let end = moment.unix((endDate))
  return end.format('MMMM YYYY');
}

const Institute = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 600
`

const Time = styled.div`
  color: darkgray;
  font-size: 16px;
  font-style: italic
`

const WorkPlace = styled.div`
  color: black;
  font-size: 14px;
`

const Location = styled.div`
  color: darkgray;
  font-size: 14px;
`

const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px
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
  </InfoArea>
  </VerticalBlock>
)
