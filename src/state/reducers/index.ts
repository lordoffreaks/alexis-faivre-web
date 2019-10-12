import { ActionTypes, Action } from '../actions/action-types'
import { createReducer } from '../helpers'

const setNavSection = (_: any, action: Action<ActionTypes.SET_NAV_SECTION>) =>
  action.section

const navSection = createReducer('', {
  [ActionTypes.SET_NAV_SECTION]: setNavSection
})

export { navSection }
