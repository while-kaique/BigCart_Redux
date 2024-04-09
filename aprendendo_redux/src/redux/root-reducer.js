import {combineReducers} from 'redux'

import themeReducer from './theme/reducer'

const rootReducer = combineReducers({themeReducer})

export default rootReducer