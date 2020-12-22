import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from "../Views/Login";
import Dashboard from "../Views/Dashboard"
import Doctors from "../Views/Components/Doctors"
import Schedule from "../Views/Components/DoctorSchedule"
import Patients from "../Views/Components/Patients"
import Appointments from "../Views/Components/Appointment"

function router({user}) {
    
    return (
        <div>
              <Router>
                <Switch>
                        <Route path='/' exact >
                            <Login user={user}/>
                        </Route>
                        <Route path='/dashboard'>
                            <Dashboard />
                        </Route>
                        {/* <Route path='/patients'>
                            <Patients />
                        </Route>
                        <Route path="/doctors">
                            <Doctors />
                        </Route>
                        <Route path="/appointments">
                            <Appointments />
                        </Route>
                        <Route path="/schedule">
                            <Schedule />
                        </Route> */}
                </Switch>
              </Router>
        </div >
    )
}

export default router;