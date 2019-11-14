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
  ] as Video[]

  it.each`
    activeVideo | activeVideoIndexExpected | selectedVideoIndexExpected | afterOddRow
    ${1}        | ${0}                     | ${1}                       | ${true}
    ${2}        | ${1}                     | ${1}                       | ${true}
    ${3}        | ${2}                     | ${2}                       | ${true}
    ${1}        | ${0}                     | ${0}                       | ${false}
    ${2}        | ${1}                     | ${1}                       | ${false}
    ${3}        | ${2}                     | ${2}                       | ${false}
  `(
    // 'should know when to show the selected: index: $index, selected: $selected, props: $props, expected: $expected',
    'for $activeVideo, should show: $activeVideoIndex, $selectedVideoIndex',
    ({
      activeVideo,
      activeVideoIndexExpected,
      selectedVideoIndexExpected,
      afterOddRow
    }) => {
      const { activeVideoIndex, selectedVideoIndex } = selectedRow(
        items,
        activeVideo,
        afterOddRow
      )
      expect(activeVideoIndex).toBe(activeVideoIndexExpected)
      expect(selectedVideoIndex).toBe(selectedVideoIndexExpected)
    }
  )
})
