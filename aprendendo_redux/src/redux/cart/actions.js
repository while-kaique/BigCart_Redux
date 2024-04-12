import CartActionTypes from "./action-types";

export const addProductCart = (name, src, value, index) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload: {name, src, value, index, quantity:1}
})
export const removeProductCart = (index, value) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload: {index, value}
})
export const removeAllProducts = (index, value, quantity) => ({
    type: CartActionTypes.REMOVE_ALL,
    payload: {index, value},
    quantity
})