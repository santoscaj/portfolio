import React,{useState, useRef, useEffect} from 'react'
// import styled from 'styled-components'
import { useGet } from '../utils/API'
import { v4 as uuidv4 } from 'uuid';
import {ActionButtons, BoldHeader3, TextArea,  VerticalIndividualBlock, Skills, HorizontalGroup, FlexRowStretch, VerticalMainBlock, MiniDelete, MiniSave} from './dependencies/GeneralComponentsAdmin'


const Responsabilities= ({responsabilities, onChange})=>{
  const objectFromArray = responsabilities.map((value, idx)=>({id:idx,value}))
  const [tempArray, setTempArray] = useState(objectFromArray)
  const [newItem, setNewItem] = useState('')
  const timer = useRef(null) 
  const updateParent = ()=>{onChange(tempArray.map(i=>i.value))}
  
  // eslint-disable-next-line
  useEffect(()=>autosave(),[tempArray])

  const autosaveFunctionCreator = (saveFunctionToRun, milliseconds)=>{
    function autoSaveFunction(){
      if(timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(()=>saveFunctionToRun(), milliseconds)
    }
    return autoSaveFunction
  }
  const autosave = autosaveFunctionCreator(updateParent,1000)
  
  const updateArray = (e,id)=> {
    setTempArray(prev=>prev.map(resp=>(resp.id===id? ({id, value: e.target.value}): resp)))
  }
  
  const deleteElement = id=>{
    setTempArray(prev=>prev.filter(resp=>resp.id!==id))
  }
  
  const saveElement = ()=>{
    if(!newItem) return alert('cannot save element, no data in element')
    let newId = uuidv4() 
    setTempArray(prev=>([...prev, {id: newId, value:newItem}]))
    setNewItem('')
  }

  return (
    <> 
    <BoldHeader3>Responsabilities:</BoldHeader3>
    {tempArray && Array.from(tempArray, responsability=>(
      <FlexRowStretch key={responsability.id}>
        <TextArea rows={1} cols={140} value={responsability.value} onChange={(e)=>{updateArray(e, responsability.id)}} ></TextArea >
        <MiniDelete onClick={()=>deleteElement(responsability.id)} >x</MiniDelete>
      </FlexRowStretch>
    ))}
    <FlexRowStretch>
    <TextArea rows={1} cols={140} value={newItem} onChange={e=>{setNewItem(e.target.value)}}></TextArea >
      <MiniSave onClick={saveElement}>+</MiniSave>
    </FlexRowStretch>
    </>
  )
}

const CareerBlock = ({career})=>{
  const [tempCareer, setTempCareer] = useState(career)
  const changeTemporaryCareer = (property, value)=>{
    setTempCareer(prev=> ({...prev, [property]: value}))
  }
  const discardFunction = ()=>{console.log('discarding')}
  const saveFunction =()=>{console.log('saving')}
  const deleteFunction =()=>{console.log('deleting')}
  return (
    <VerticalIndividualBlock>
      <HorizontalGroup property="id" value={tempCareer._id} disabled={true} onChange={(e)=>changeTemporaryCareer( '_id', e.target.value)} />
      <HorizontalGroup property="company" value={tempCareer.company} onChange={(e)=>changeTemporaryCareer( 'company', e.target.value)} />
      <HorizontalGroup property="order" value={tempCareer.order} onChange={e=>changeTemporaryCareer( 'order', e.target.value)} />
      <HorizontalGroup property="position" value={tempCareer.position} onChange={e=>changeTemporaryCareer( 'position', e.target.value)} />
      <HorizontalGroup property="startDate" value={tempCareer.startDate} onChange={e=>changeTemporaryCareer( 'startDate', e.target.value)} />
      <HorizontalGroup property="endDate" value={tempCareer.endDate} onChange={e=>changeTemporaryCareer( 'endDate', e.target.value)} />
      <Responsabilities responsabilities={tempCareer.responsabilities} onChange={(newArray)=>changeTemporaryCareer('responsabilities', newArray)}/>
      <Skills skills={tempCareer.skills} onChange={(newSkill)=>changeTemporaryCareer('skills', newSkill)} />
      <ActionButtons onDiscard={discardFunction} onSave={saveFunction} onDelete={deleteFunction}  />
    </VerticalIndividualBlock>
  )
}

const CareerAdmin = ()=>{
  const [careers, setCareer ] = useState(null)

  useGet('http://localhost:8000/careers')
  .then(answer=>{
    setCareer(answer.data)
  }).catch(e=>{
    console.error(e)
  })
  return (
    <VerticalMainBlock>  
      { careers && Array.from(careers, career=>(
          <CareerBlock key={career._id} career={career}  />
      ))}      
    </VerticalMainBlock>
  )}
  
  export default CareerAdmin