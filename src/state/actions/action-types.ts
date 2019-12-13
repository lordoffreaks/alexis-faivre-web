import { AnyAction } from 'redux'

export interface Action<T> extends AnyAction {
  type: T
}

export enum ActionTypes {
  SET_NAVIGATION_ITEM = 'SET_NAVIGATION_ITEM'
}
