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
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div className="App">
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <h1 style={{color:'red'}} >Page under construction</h1>
      </div>
      <Router>
        <div>
        <Switch>
          <Route path="/admin/:category">
            {token? <Admin token={token} /> : 
            <Redirect to="/login" /> }
          </Route>
          <Route path="/admin">
            <Redirect to="/admin/career" /> 
          </Route>
          <Route path="/login">
            <Login setToken={setToken}/>
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
