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
