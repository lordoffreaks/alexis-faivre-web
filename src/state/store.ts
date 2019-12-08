import { combineReducers, createStore as reduxCreateStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
// @ts-ignore
import { reducer as burgerMenu } from 'redux-burger-menu'
import { navigationItem, activeVideo } from './reducers/index'

const reducers = combineReducers({
  burgerMenu,
  navigationItem,
  activeVideo
})

const createStore = () => reduxCreateStore(reducers, composeWithDevTools({})())

export default createStore
