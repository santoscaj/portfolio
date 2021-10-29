import React,{ useEffect} from 'react'
import ProjectAdmin from './ProjectAdmin'
import EducationAdmin from './EducationAdmin'
import CareerAdmin from './CareerAdmin'
import CertificationAdmin from './CertificationAdmin'
import styled from 'styled-components'
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  // Link,
  // Redirect,
  useHistory,
  // useLocation
} from "react-router-dom";

const FlexUL = styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center`

const AdminBtn = styled.button`
background: white;
padding: 5px;
border: 1px solid black;
width: 200px;
cursor: pointer
`


const AdminNavBar = ({pages, onClickFunc})=>(
  <div>
    <nav>
      <FlexUL>
        {Array.from(pages, page=>(
          <li style={{ listStyleType: 'None'}} key={page} >
          <AdminBtn id={page} onClick={onClickFunc} to={"/admin/"+page}>{page}</AdminBtn>
        </li>  
        ))}
      </FlexUL>
    </nav>
  </div>
)

const Admin = ({token, setToken})=>{
  let {category} = useParams()
  const pages = [  'career', 'projects', 'education', 'certification' ]  
  const history = useHistory()

  const changePage = event=>{
    history.push('/admin/'+event.target.id)
  }
  useEffect(()=>{},[category])

  return (<>
    <h1 > Admin Page : {category} </h1>
    <AdminNavBar pages={pages} onClickFunc={changePage} />
    <Switch>
      <Route path="/admin/career">
        <CareerAdmin/>
      </Route>
      <Route path="/admin/certification">
        <CertificationAdmin/>
      </Route>
      <Route path="/admin/education">
        <EducationAdmin/>
      </Route>
      <Route path="/admin/projects">
        <ProjectAdmin/>
      </Route>
    </Switch>
  </>
  )
}

export default Admin
