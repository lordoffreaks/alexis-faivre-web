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

export const showSelectedRow = (
  index: number,
  selected: boolean,
  props: any
): boolean => {
  return index % 2 === 0 ? false : selected || props !== undefined
}
