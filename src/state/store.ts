import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
// @ts-ignore
import { reducer as burgerMenu } from 'redux-burger-menu'
import { navigationItem } from './reducers/index'

const reducers = combineReducers({
  burgerMenu,
  navigationItem
})

const createStore = () =>
  reduxCreateStore(reducers, composeWithDevTools({})(applyMiddleware(thunk)))

export default createStore
