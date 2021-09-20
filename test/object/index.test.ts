import { deepClone, deepMerge, objectMap } from '../../src'

describe('object', () => {
  it('objectMap', () => {
    expect(objectMap({ name: 'kdp', age: 12 }, (k, v) => k === 'name' ? undefined : [k, v])).toEqual({ age: 12 })
  })

  it('deepClone', () => {
    const map = new Map()
    map.set('name', 'kkk')
    const target = {
      field1: 1,
      field2: undefined,
      field3: [2, 4, 8],
      field4: {
        child: 'child',
        child2: {
          child2: 'child2',
        },
      },
      field5: new Set([1, 2, 3]),
      field6: map,
      field7: Object(Symbol(1)),
      field8: /\w*$/,
    }
    // @ts-expect-error
    target.target = target
    const result = deepClone(target)
    expect(result).toEqual(target)
    expect(result.field4).not.toBe(target.field4)
  })
})

describe('deepMerge', () => {
  it('should merge Objects and all nested Ones', () => {
    const obj1 = { a: { a1: 'A1' }, c: 'C', d: {} }
    const obj2 = { a: { a2: 'A2' }, b: { b1: 'B1' }, d: null } as any
    const obj3 = { a: { a1: 'A1', a2: 'A2' }, b: { b1: 'B1' }, c: 'C', d: null }
    expect(deepMerge({}, obj1, obj2)).toEqual(obj3)
  })
  it('should behave like Object.assign on the top level', () => {
    const obj1 = { a: { a1: 'A1' }, c: 'C' }
    const obj2 = { a: undefined, b: { b1: 'B1' } }
    const merged = deepMerge(obj1, obj2)
    expect(merged).toEqual(Object.assign({}, obj1, obj2))
  })
  it('should not merge array values, just override', () => {
    const obj1 = { a: ['A', 'B'] }
    const obj2 = { a: ['C'], b: ['D'] }
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: ['C'], b: ['D'] })
  })
})
