
const initialState = {
    dark: false
}

const themeReducer = (state = initialState, action) => {
    if (action.type === 'theme/dark'){
        return {...state, dark:true}
    } 
    else if (action.type === 'theme/light'){
        return {...state, dark:false}
    } 
    return state
}

export default themeReducer;