import { Video } from './models/video'

export function partition<T>(
  list: Array<T>,
  predicate: (a: T) => boolean
): Array<Array<T>> {
  return list.reduce(
    (acc, e) => {
      acc[predicate(e) ? 0 : 1].push(e)
      return acc
    },
    [[], []]
  )
}

export const selectedRow = (items: Array<Video>, activeVideo: number) => {
  const activeVideoIndex =
    activeVideo && items.findIndex(e => e.id === activeVideo)
  const activeVideoProps = activeVideo && items.find(e => e.id === activeVideo)
  let selectedVideoIndex = activeVideo && activeVideoIndex

  if (
    activeVideo &&
    activeVideoIndex % 2 === 0 &&
    items[activeVideoIndex + 1] !== undefined
  ) {
    selectedVideoIndex = activeVideoIndex + 1
  }

  return {
    activeVideoIndex,
    activeVideoProps,
    selectedVideoIndex
  }
}
