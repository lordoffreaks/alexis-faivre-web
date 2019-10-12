declare module 'redux-burger-menu' {
  import { Action } from 'redux'
  type ReduxBurguerMenu = {
    reducer: ({ isOpen }: { isOpen: boolean }, action: Action) => void
  }
  const reducer: ReduxBurguerMenu
  export = reducer
}
