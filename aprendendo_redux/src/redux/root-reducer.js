import {combinedReducers} from 'redux'

import userReducer from './user/reducer'

const rootReducer = combinedReducers({userReducer})

export default rootReducer