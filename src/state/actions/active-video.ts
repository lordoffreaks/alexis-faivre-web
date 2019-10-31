import { ActionTypes } from './action-types'

export const setActiveVideo = (id: number) => ({
  type: ActionTypes.SET_ACTIVE_VIDEO,
  id
})
