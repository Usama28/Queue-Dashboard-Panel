function setPatients (patientList){
    return {
        type: 'SET_PATIENTS',
        data: patientList
    }
}

export {
    setPatients
}