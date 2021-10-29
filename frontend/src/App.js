// import logo from './logo.svg';
import React,{ useState } from 'react'
import './App.css';
import Home from './components/Home';
import Admin from './components/Admin';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [token, setToken] = useState('hakuna');
  // const [token, setToken] = useState(null);

  return (
    <div className="App">
      <Router>
        <div>
        <Switch>
          <Route exact path="/admin/:category">
            {token? <Admin token={token} /> :
            <Login setToken={setToken} /> }
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
