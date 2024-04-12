
import messsageActionTypes from "./action-types";

const initialState = {
    canClick: true,
    divClass: '',
    message: ''
}

const messageReducer = (state = initialState, action) => {
    switch (action.type){
        case messsageActionTypes.ADD_CART_MSG:
            return {
                ...state,
                divClass: 'add',
                message: action.payload,
            }
        case messsageActionTypes.REMOVE_CART_MSG:
            return {
                ...state, 
                divClass: 'remove',
                message: action.payload,
            }
        case messsageActionTypes.REMOVE_MSG:
            return {
                ...state, 
                divClass: 'removeMSG'
            }

            // MSG ACTIONS
            // MSG ACTIONS
        case messsageActionTypes.CANT_MSG:
            return {
                ...state,
                canClick: false
            }
        case messsageActionTypes.CAN_MSG:
            return {
                ...state,
                canClick: true
            }
    default: 
        return state
}

}

export default messageReducer;