import { baseConvert, sum, toFixed } from '../../src'

describe('math', () => {
  it('sum', () => {
    expect(sum(1, 2, 3)).toBe(6)
  })

  it('toFixed', () => {
    expect(toFixed({} as any)).toEqual(NaN)
    expect(toFixed('2', 2)).toEqual(2.00)
    expect(toFixed('2.0', 2)).toEqual(2.00)
  })

  it('baseConvert', () => {
    expect(baseConvert(23, 2)).toBe('10111')
  })
})
