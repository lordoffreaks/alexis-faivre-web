import { showSelectedRow } from '../src/helpers'

describe('Latest works', () => {
  it.each`
    index | selected | props        | expected
    ${0}  | ${true}  | ${{}}        | ${false}
    ${0}  | ${true}  | ${undefined} | ${false}
    ${0}  | ${false} | ${{}}        | ${false}
    ${0}  | ${false} | ${undefined} | ${false}
    ${1}  | ${false} | ${undefined} | ${false}
    ${1}  | ${false} | ${{}}        | ${true}
    ${1}  | ${true}  | ${{}}        | ${true}
    ${1}  | ${true}  | ${undefined} | ${true}
    ${2}  | ${true}  | ${{}}        | ${false}
    ${2}  | ${true}  | ${undefined} | ${false}
    ${2}  | ${false} | ${{}}        | ${false}
    ${2}  | ${false} | ${undefined} | ${false}
  `(
    // 'should know when to show the selected: index: $index, selected: $selected, props: $props, expected: $expected',
    'should show: $expected when: $index, $selected, $props',
    ({ index, selected, props, expected }) => {
      expect(showSelectedRow(index, selected, props)).toBe(expected)
    }
  )
})
