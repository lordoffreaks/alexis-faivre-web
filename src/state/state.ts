import { NavigationItem } from '../models/navigation'

export interface State {
  navigationItem: NavigationItem
  burgerMenu: {
    isOpen: boolean
  }
}
