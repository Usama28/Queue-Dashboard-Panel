import React,{useEffect,useState} from 'react'
import { Icon, Button, Modal , Table } from 'semantic-ui-react'
import {connect } from 'react-redux'


function Patients(props) {
    console.log('props***',props)
    return(
        <div>
        
           Patients
            <button>show</button>
        </div>
    )
}

//  export default Patients
const mapStateToProps=(state)=>{

    return{
       doctorList:state.doctorReducer.doctors,
       patientList:state.PatientReducer.patients

  }  
}

export default connect(mapStateToProps,null)(Patients)