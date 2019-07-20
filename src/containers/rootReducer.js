import { combineReducers } from 'redux'
import AboutFromReducer from './AboutFormContainer/AboutFormContainer.redux'

const rootReducer = combineReducers({
  about: AboutFromReducer 
})

export default rootReducer