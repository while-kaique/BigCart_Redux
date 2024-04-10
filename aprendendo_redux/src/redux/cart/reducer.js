
const initialState = {
    currentCart: []
}

const cartReducer = (state = initialState, action) => {
    if (action.type === 'cart/add'){
        return {...state, currentCart:action.payload}
    } 

    return state
}

export default cartReducer;