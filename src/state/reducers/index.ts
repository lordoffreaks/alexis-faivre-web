import { ActionTypes, Action } from '../actions/action-types'
import { createReducer } from '../helpers'
import { NavigationItem } from '../../models/navigation'
import { State } from '../state'

const setNavigationItem = (
  _: State,
  action: Action<ActionTypes.SET_NAVIGATION_ITEM>
) => action.navigationItem

const setActiveVideo = (
  _: State,
  action: Action<ActionTypes.SET_ACTIVE_VIDEO>
) => action.id

const setActiveVideoReady = (
  _: State,
  action: Action<ActionTypes.SET_ACTIVE_VIDEO_READY>
) => action.ready

const navigationItem = createReducer(NavigationItem.home, {
  [ActionTypes.SET_NAVIGATION_ITEM]: setNavigationItem
})

const activeVideo = createReducer(null, {
  [ActionTypes.SET_ACTIVE_VIDEO]: setActiveVideo
})

const activeVideoReady = createReducer(false, {
  [ActionTypes.SET_ACTIVE_VIDEO_READY]: setActiveVideoReady
})

export { navigationItem, activeVideo, activeVideoReady }
