import UserActionTypes from "./action-types"

export const loginUser = ({name}) => ({
    type: UserActionTypes.LOGIN,
    payload: name
})
export const logoutUser = () => ({
    type: UserActionTypes.LOGOUT,
})