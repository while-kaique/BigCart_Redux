import messsageActionTypes from "./action-types";

export const addProductMessage = () => ({
    type: messsageActionTypes.ADD_CART_MSG,
    payload: 'Produto adicionado ao carrinho!'
})
export const removeCartMessage = () => ({
    type: messsageActionTypes.REMOVE_CART_MSG,
    payload: 'Produto removido do carrinho!'
})
export const removeMessage = () => ({
    type: messsageActionTypes.REMOVE_MSG
})