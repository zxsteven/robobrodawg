import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { searchRobot, requestRobot } from '../reducers/reducers'


const logger = createLogger()

const rootReducer = combineReducers({
  searchRobot, 
  requestRobot
})
const store = createStore(
  rootReducer, 
  applyMiddleware(thunkMiddleware, logger)
)

export default store