import React, { useState } from 'react'
import BackendEndpoint from '../api.config.js'
import { useHistory } from 'react-router-dom'

const Login = ({setToken})=>{
  const history = useHistory()
  const [username, setUsername ] = useState('santoscaj')
  const [password, setPassword ] = useState('ajsc33tb.')
  
  const submit = e =>{
    e.preventDefault()
    if(!username || !password ) alert('Please provide both username and password')
      fetch(BackendEndpoint.login, 
        {method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json' },})
      .then(response=>{
        if(!response.ok) throw Error(response.statusText)
        return response.json()
      })
      .then(response=>{
        let token = response.accessToken
        localStorage.setItem('token', token)
        setToken(token)
        setUsername('')
        setPassword('')
        history.push('/admin')
      })
      .catch(err =>{  
        console.dir(err)
        console.log(err.Error)
        if(err.message === 'Unauthorized' || err.message === 'Not Found' )
          alert('Could not sign in, please check username and password')
      })
  }

  return (
    <div>
      <h1>login page</h1>
      <form>
        <label>
          <p>Username</p>
          <input value={username} onChange={e=>{setUsername(e.target.value)}} type="text" />
        </label>
        <label>
          <p>Password</p>
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" />
        </label>
        <div>
          <button type="submit" onClick={submit}>Submit</button>
        </div>
      </form>
    </div>
  )
}


export default Login