import { Reducer } from 'redux'
import { ActionTypes } from './actions/action-types'

type Handlers<T> = { [K in ActionTypes]?: Reducer<T> }

export interface BasicAction {
  type: ActionTypes
  [other: string]: any
}

export function createReducer<T>(
  initialState: T,
  handlers: Handlers<T>
): (state: T, action: BasicAction) => T {
  return (state = initialState, action) =>
    handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state
}
