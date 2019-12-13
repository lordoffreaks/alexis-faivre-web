import { ActionTypes, Action } from '../actions/action-types'
import { createReducer } from '../helpers'
import { NavigationItem } from '../../models/navigation'
import { State } from '../state'

const setNavigationItem = (
  _: State,
  action: Action<ActionTypes.SET_NAVIGATION_ITEM>
) => action.navigationItem

const navigationItem = createReducer(NavigationItem.home, {
  [ActionTypes.SET_NAVIGATION_ITEM]: setNavigationItem
})

export { navigationItem }
