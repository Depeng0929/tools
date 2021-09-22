import { findValueByKey } from '../../src'

describe('vendor', () => {
  it('findValueByKey', () => {
    expect(findValueByKey()(2, [{ key: 1, value: '1' }, { key: 2, value: '2' }])).toBe('2')
    expect(findValueByKey()(3, [{ key: 1, value: '1' }, { key: 2, value: '2' }])).toBeUndefined()
  })
})
