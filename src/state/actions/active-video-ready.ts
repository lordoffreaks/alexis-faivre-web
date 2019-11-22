import { ActionTypes } from './action-types'

export const setActiveVideoReady = (ready: boolean) => ({
  type: ActionTypes.SET_ACTIVE_VIDEO_READY,
  ready
})
