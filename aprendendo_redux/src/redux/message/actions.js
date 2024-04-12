import messsageActionTypes from "./action-types";

export const addProductMessage = () => {
    return {
        type: messsageActionTypes.ADD_CART_MSG,
        payload: 'Produto adicionado ao carrinho!'
    }

}
export const removeCartMessage = () => ({
    type: messsageActionTypes.REMOVE_CART_MSG,
    payload: 'Produto removido do carrinho!'
})
export const removeMessage = () => ({
    type: messsageActionTypes.REMOVE_MSG
})
export const canMessage = () => ({
    type: messsageActionTypes.CAN_MSG
})
export const cantMessage = () => ({
    type: messsageActionTypes.CANT_MSG
})