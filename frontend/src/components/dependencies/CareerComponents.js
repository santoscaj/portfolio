import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { VerticalBlock, HorizontalBlock } from './GeneralComponents'
function getTime(endDate, startDate){
  // let start = moment(new Date(startDate))
  // let end = moment(new Date(endDate))
  let start = moment.unix((startDate))
  let end = moment.unix((endDate))
  let years = end.diff(start, 'years')
  let months = end.diff(start, 'months')
  return `${years} years ${months} months`
}


const Position = styled.div`
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

const careerTab = ({career})=>(
  <VerticalBlock>
    <HorizontalBlock>
      <Position> {career.position}</Position>
      <Time> {getTime(career.endDate,career.startDate)}</Time>
    </HorizontalBlock>
    <HorizontalBlock>
      <WorkPlace> {career.company}</WorkPlace>
      <Location> {career.location}</Location>
    </HorizontalBlock>
    <ul>
      {Array.from(career.responsabilities,(responsab, idx)=>(
        <li key={idx} >{responsab}</li>
      ))}
    </ul>
  </VerticalBlock>
)

export default careerTab