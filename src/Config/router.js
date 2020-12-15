import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from "../Views/Login";
import Home from "../Views/Home";
import Dashboard from "../Views/Dashboard"


function router(props) {

    // const { isLoggedIn, isLoading } = props
    // if (isLoading) {
    //     return <div style={{ textAlign: 'center', marginTop: '10%' }}>
    //         <img width='300' src="https://i.gifer.com/7SMT.gif" />
    //     </div>
    // }
    // const currentPath = window.location.pathname.length === 1 ? 'Home' : window.location.pathname
    // console.log(currentPath)
    
    return (
        <div>
            <Router>

                <Switch>
                    <Route path="/" exact>
                        <Login/>
                    </Route>
                    <Route path="/Home">
                         <Home />
                    </Route>
                    <Route path="/Dashboard">
                        <Dashboard />
                    </Route>
                
                </Switch>
            </Router>
        </div >
    )
}

export default router;