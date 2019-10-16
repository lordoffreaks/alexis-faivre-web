import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../state/actions/navigation-item'
import { useMemo } from 'react'

export const useSetNavigationItem = () => {
  const dispatch = useDispatch()
  const { setNavigationItem } = useMemo(
    () => bindActionCreators(actionCreators, dispatch),
    [dispatch]
  )

  return setNavigationItem
}
