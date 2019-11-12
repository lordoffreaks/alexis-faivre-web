import { selectedRow } from '../src/helpers'
import { Video } from '../src/models/video'

describe('Latest works', () => {
  const items = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ] as Array<Video>

  it.each`
    activeVideo | activeVideoIndexExpected | selectedVideoIndexExpected
    ${1}        | ${0}                     | ${1}
    ${2}        | ${1}                     | ${1}
    ${3}        | ${2}                     | ${2}
  `(
    // 'should know when to show the selected: index: $index, selected: $selected, props: $props, expected: $expected',
    'for $activeVideo, should show: $activeVideoIndex, $selectedVideoIndex',
    ({ activeVideo, activeVideoIndexExpected, selectedVideoIndexExpected }) => {
      const { activeVideoIndex, selectedVideoIndex } = selectedRow(
        items,
        activeVideo
      )
      expect(activeVideoIndex).toBe(activeVideoIndexExpected)
      expect(selectedVideoIndex).toBe(selectedVideoIndexExpected)
    }
  )
})
