import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../state/actions/navigation-item'
import { State } from '../state/state'
import { NavigationItem } from '../models/navigation'

interface UseSetNavigationItem {
  navigationItem: NavigationItem
  setNavigationItem: (navigationItem: NavigationItem) => void
}

export const useSetNavigationItem = (): UseSetNavigationItem => {
  const dispatch = useDispatch()
  const navigationItem = useSelector(
    ({ navigationItem }: State) => navigationItem
  )
  const { setNavigationItem } = bindActionCreators(actionCreators, dispatch)

  return { navigationItem, setNavigationItem }
}
