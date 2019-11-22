import { useSelector } from 'react-redux'
import { State } from '../state/state'
import { useActions } from './useActions'
import * as actionCreators from '../state/actions/active-video-ready'

type UseSetNavigationItem = {
  ready: boolean
  setActiveVideoReady: (ready: boolean) => void
}

export const useSetActiveVideoReady = (): UseSetNavigationItem => {
  const ready = useSelector(({ activeVideoReady }: State) => activeVideoReady)
  const { setActiveVideoReady } = useActions(actionCreators, [ready])

  return { ready, setActiveVideoReady }
}
