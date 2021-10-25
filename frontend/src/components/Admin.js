import React from 'react'
import Login from './Login'
const Admin = ({token, setToken})=>{
  if(!token)
    return <Login setToken={setToken} />
  return <>
            <p > admin page </p>
        </>

}
  

export default Admin
