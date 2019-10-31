import { NavigationItem } from '../models/navigation'

export interface State {
  navigationItem: NavigationItem
  activeVideo: number
  burgerMenu: {
    isOpen: boolean
  }
}
