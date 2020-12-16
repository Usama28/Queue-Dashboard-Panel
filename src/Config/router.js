import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from "../Views/Login";
import Dashboard from "../Views/Dashboard"
import Doctors from "../Views/Doctors"
import Schedule from "../Views/DoctorSchedule"
import Patients from "../Views/Patients"
import Appointments from "../Views/Appointment"

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
                    <Route path="/Dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/Patients">
                        <Patients />
                    </Route>
                    <Route path="/Doctors">
                        <Doctors />
                    </Route>
                    <Route path="/Appointments">
                        <Appointments />
                    </Route>
                    <Route path="/DoctorsSchedule">
                        <Schedule />
                    </Route>
                </Switch>
            </Router>
        </div >
    )
}

export default router;