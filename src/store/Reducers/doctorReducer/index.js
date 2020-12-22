function DoctorReducer(state = {}, action) {
    switch (action.type) {

        case 'SET_DOCTOR': {
            return { ...state, user: action.data }
        }
        default: {
            return state
        }
    }
}

export default DoctorReducer