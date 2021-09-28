import { getSingle } from '../../src/pattern'

describe('pattern', () => {
  it('single', () => {
    const create = getSingle((a: string, b: string) => ({ name: 'kdp', a, b }))
    expect(create('12', '12')).toBe(create('12', '12'))
  })
})
