function DoctorReducer(state = {}, action) {
    console.log('doc reducer',state)

    switch (action.type) {

        case 'SET_DOCTOR': {
            return { ...state, doctors: action.data }
        }
        default: {
            return state
        }
    }
}

export default DoctorReducer