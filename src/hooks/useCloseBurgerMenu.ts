// @ts-ignore
import { action as toggleMenu } from 'redux-burger-menu'

import { useSelector } from 'react-redux'
import { State } from '../state/state'
import { useActions } from './useActions'

type CloseBurgerMenu = {
  closeBurgerMenu: () => void
  isOpen: boolean
}

export const useCloseBurgerMenu = (): CloseBurgerMenu => {
  const closeBurgerMenu = useActions(() => toggleMenu(false), [])
  const isOpen = useSelector(({ burgerMenu: { isOpen } }: State) => isOpen)

  return { isOpen, closeBurgerMenu }
}
