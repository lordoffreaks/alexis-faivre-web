import { ActionTypes } from './action-types'
import { NavigationItem } from '../../models/navigation'

export const setNavigationItem = (navigationItem: NavigationItem) => ({
  type: ActionTypes.SET_NAVIGATION_ITEM,
  navigationItem
})
