import UserActionTypes from "./action-types";

const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case UserActionTypes.LOGIN:
            console.log('chegou aqui')
            return {...state, currentUser:action.payload}
        case UserActionTypes.LOGOUT:
            return {...state, currentUser:null}

        default:
            return state
    }
}

export default userReducer;