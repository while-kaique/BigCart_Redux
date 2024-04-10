
import messsageActionTypes from "./action-types";

const initialState = {
    messageOn: false,
    divClass: '',
    message: ''
}

const messageReducer = (state = initialState, action) => {
    switch (action.type){
        case messsageActionTypes.ADD_CART_MSG:
            return {
                ...state,
                messageOn: true, 
                divClass: 'add',
                message: action.payload,
            }
        case messsageActionTypes.REMOVE_CART_MSG:
            return {
                ...state, 
                messageOn: true, 
                divClass: 'remove',
                message: action.payload,
            }
        case messsageActionTypes.REMOVE_MSG:
            return {
                ...state, 
                divClass: 'removing'
            }
    default: 
        return state
}

}

export default messageReducer;