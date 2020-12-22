import React , { useState } from 'react'
import './App.css';
import {  BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Login from './Views/Login'
import Dashboard from "./Views/Dashboard";
import RouterFunc from './Config/router'
import { Provider } from 'react-redux'
import  store  from './store/store'

function App() {

  const [userValue,setValue]=useState(false)
  const user=function (user) {
    console.log('***',user)
    setValue(user)
  }
  
  return (
    <div className="App">
      {/* <Provider store={store}> */}
          {!userValue ? <RouterFunc user={user}/> : 
          <Router>
              <Dashboard />
          </Router>}
     {/* </Provider> */}
    </div>
  );
}

export default App;
