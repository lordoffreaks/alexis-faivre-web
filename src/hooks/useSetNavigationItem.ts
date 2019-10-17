import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../state/actions/navigation-item'
import { useMemo } from 'react'
import { State } from '../state/state'
import { NavigationItem } from '../models/navigation'

type UseSetNavigationItem = {
  navigationItem: NavigationItem
  setNavigationItem: (navigationItem: NavigationItem) => void
}

export const useSetNavigationItem = (): UseSetNavigationItem => {
  const dispatch = useDispatch()
  const { setNavigationItem } = useMemo(
    () => bindActionCreators(actionCreators, dispatch),
    [dispatch]
  )

  const navigationItem = useSelector(
    ({ navigationItem }: State) => navigationItem
  )

  return { navigationItem, setNavigationItem }
}
