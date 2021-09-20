import { range, uniq } from '../../src'

describe('array', () => {
  it('range', () => {
    expect(range(0)).toEqual([])
    expect(range(2)).toEqual([0, 1])
    expect(range(2, 5)).toEqual([2, 3, 4])
    expect(range(2, 10, 2)).toEqual([2, 4, 6, 8])
  })
  it('uniq', () => {
    expect(uniq([1, 2, 2, 3])).toEqual([1, 2, 3])
  })
})
