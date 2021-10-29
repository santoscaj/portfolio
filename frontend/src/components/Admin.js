import React,{useState} from 'react'
import ProjectAdmin from './ProjectAdmin'
import EducationAdmin from './EducationAdmin'
import CareerAdmin from './CareerAdmin'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';


const FlexUL = styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center`

const AdminNavBar = ({pages, onClickFunc})=>(
  <div>
    <nav>
      <FlexUL>
        {Array.from(pages, page=>(
          <li key={page} >
          <button id={page} onClick={onClickFunc} to={"/admin/"+page}>{page}</button>
        </li>  
        ))}
      </FlexUL>
    </nav>
  </div>
)

const Admin = ({token, setToken})=>{
  let {category} = useParams()
  const pages = [  'career', 'projects', 'education' ]  
  const [page, setPage] = useState(category)

  const changePage = event=>{
    setPage(event.target.id)
  }

 return (<>
    <p > admin page </p>
    <AdminNavBar pages={pages} onClickFunc={changePage} />
    {page == 'career'?<CareerAdmin /> : page=='education' ?   <EducationAdmin /> : <ProjectAdmin />}
  </>
  )
}

export default Admin
