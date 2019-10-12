import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import { navigationItem } from './reducers/index'

const reducers = combineReducers({
  navigationItem
})

const createStore = () =>
  reduxCreateStore(reducers, composeWithDevTools({})(applyMiddleware(thunk)))

export default createStore
