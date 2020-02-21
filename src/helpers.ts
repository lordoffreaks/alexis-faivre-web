import { Video } from './models/video'

export function partition<T>(list: T[], predicate: (a: T) => boolean): T[][] {
  return list.reduce(
    (acc, e) => {
      acc[predicate(e) ? 0 : 1].push(e)
      return acc
    },
    [[], []]
  )
}

export const selectedRow = (
  items: Video[],
  activeVideo: number,
  afterOddRow: boolean = true
) => {
  const activeVideoIndex =
    activeVideo && items.findIndex(e => e.id === activeVideo)
  const activeVideoProps = activeVideo && items.find(e => e.id === activeVideo)
  let selectedVideoIndex = activeVideo && activeVideoIndex

  if (
    afterOddRow &&
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
