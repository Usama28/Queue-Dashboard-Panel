function setDoctor (doctorData){
    console.log('actions',doctorData)
    return {
        type: 'SET_DOCTOR',
        data: doctorData
    }
}

export {
    setDoctor
}