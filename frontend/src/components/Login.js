import React from 'react'

const Login = ({setToken})=>(
  <div>
    <h1>login page</h1>
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
)

export default Login