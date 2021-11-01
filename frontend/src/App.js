// import logo from './logo.svg';
import React,{ useEffect, useState } from 'react'
import './App.css';
import Home from './components/Home';
import Admin from './components/Admin';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";


function App() {
  const [token, setToken] = useState('yeah');

  useEffect(()=>{
    setToken('hahaha')
  },[])

  return (
    <div className="App">
      <Router>
        <div>
        <Switch>
          <Route path="/admin/:category">
            {token? <Admin token={token} /> : 
            <Redirect to="/login" /> }
          </Route>
          <Route path="/admin">
            <Redirect to="/admin/projects" /> 
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
}



export default App;
