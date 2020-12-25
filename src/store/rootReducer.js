import {combineReducers} from 'redux'
import doctorReducer from './Reducers/doctorReducer'
import PatientReducer from './Reducers/patientReducer'

export default combineReducers({
    doctorReducer,PatientReducer
})