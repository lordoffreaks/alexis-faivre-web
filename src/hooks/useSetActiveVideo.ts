import { useSelector } from 'react-redux'
import { State } from '../state/state'
import { useActions } from './useActions'
import * as actionCreators from '../state/actions/active-video'

type UseSetNavigationItem = {
  activeVideo: number
  setActiveVideo: (id: number) => void
}

export const useSetActiveVideo = (): UseSetNavigationItem => {
  const activeVideo = useSelector(({ activeVideo }: State) => activeVideo)
  const { setActiveVideo } = useActions(actionCreators, [activeVideo])

  return { activeVideo, setActiveVideo }
}
