import { describe, expect, it } from 'vitest'
import { at, findValueByKey, move, range, remove, select, uniq } from '../src/index'

describe('array', () => {
  it('uniq', () => {
    expect(uniq([1, 2, 3, 3, 4])).toEqual([1, 2, 3, 4])
  })

  it('range', () => {
    expect(range(3)).toEqual([0, 1, 2])
    expect(range(1, 3)).toEqual([1, 2])
    expect(range(1, 4, 2)).toEqual([1, 3])
  })

  it('at', () => {
    expect(at([1, 2, 3], 2)).toBe(3)
    expect(at([1, 2, 3], -1)).toBe(3)
    expect(at([1, 2, 3], -1)).toBe(3)

    const target = { name: 'kdp' }
    expect(at([{ name: 'k' }, target], 1)).toBe(target)
  })

  it('remove', () => {
    const arr = [1, 2, 3]
    expect(remove(arr, 2)).toBeTruthy()
    expect(remove(arr, 100)).toBeFalsy()
  })

  it('move', () => {
    const arr = [1, 3, 4, 5]
    expect(move(arr, 1, 3)).toEqual([1, 4, 5, 3])
  })

  it('findValueByKey', () => {
    const arr = [{ name: 'k', age: 12 }, { name: 'kdp', age: 13 }]
    const arr2: Array<{ name: string; age: number }> = []
    const find = findValueByKey('name', 'age')
    expect(find('k', arr)).toBe(12)
    expect(find('c', arr)).toBeUndefined()
    expect(find('c', arr2)).toBeUndefined()
  })

  it('select', () => {
    const abby = { name: 'Abby', age: 7, hair: 'blond', grade: 2 }
    const fred = { name: 'Fred', age: 12, hair: 'brown', grade: 7 }
    const kids = [abby, fred]
    const arr = select(['age', 'name'], kids)

    expect(arr).toEqual([
      { name: 'Abby', age: 7 },
      { name: 'Fred', age: 12 },
    ])
  })
})
