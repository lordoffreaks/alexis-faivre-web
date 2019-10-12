import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import { reducer as burgerMenu } from 'redux-burger-menu'
import { navSection } from './reducers/index'

const reducers = combineReducers({
  burgerMenu,
  navSection
})

const createStore = () =>
  reduxCreateStore(reducers, composeWithDevTools({})(applyMiddleware(thunk)))

export default createStore
