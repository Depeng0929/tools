import { assert } from '../../src'

describe('function', () => {
  it('assert', () => {
    // eslint-disable-next-line no-self-compare
    expect(assert(1 === 1, 'yes')).toBeTruthy()
  })
})
