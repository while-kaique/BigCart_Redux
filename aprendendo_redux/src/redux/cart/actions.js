import CartActionTypes from "./action-types";

export const addProductCart = (name, src) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload: {name, src}
})
export const removeProductCart = (name, src) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: {name, src}
})