import { NavigationItem } from '../models/navigation'

export interface State {
  navigationItem: NavigationItem
  activeVideo: number
  activeVideoReady: boolean
  burgerMenu: {
    isOpen: boolean
  }
}
