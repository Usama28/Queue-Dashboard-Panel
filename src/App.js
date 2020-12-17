import React , { useState } from 'react'
import './App.css';
 import {  BrowserRouter as Router} from "react-router-dom";
import Login from './Views/Login'
import Dashboard from "./Views/Dashboard";
function App() {

  
  return (
    <div className="App">
     <Router>
        <Dashboard/>
     </Router>
    </div>
  );
}

export default App;
