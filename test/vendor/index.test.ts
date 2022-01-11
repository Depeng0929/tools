import { add, divide, findValueByKey, multiply, subtract } from '../../src'

describe('vendor', () => {
  it('findValueByKey', () => {
    expect(findValueByKey()(2, [{ key: 1, value: '1' }, { key: 2, value: '2' }])).toBe('2')
    expect(findValueByKey()(3, [{ key: 1, value: '1' }, { key: 2, value: '2' }])).toBeUndefined()
  })

  it('operation ok', () => {
    expect(add(0.1, 0.3)).toBe('0.4')
    expect(subtract(0.3, 0.1)).toBe('0.2')
    expect(divide(0.3, 2)).toBe('0.15')
    expect(multiply(0.1, 0.3)).toBe('0.03')

    expect(add('0.1', 0.3)).toBe('0.4')
  })
})
