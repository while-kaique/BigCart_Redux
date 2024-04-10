import UserActionTypes from "./action-types"

export const loginUser = () => ({
    type: UserActionTypes.LOGIN
})
export const logoutUser = () => ({
    type: UserActionTypes.LOGOUT,
})