import { describe, expect, it } from 'vitest'
import { at, findValueByKey, move, range, remove, select, uniq, removeElement } from '../src/index'

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

  it('removeElement', () => {
    const arr = [1, 2, 3]
    expect(removeElement(2, arr)).toBeTruthy()
    expect(removeElement(4, arr)).toBeFalsy()
  })

  it('move', () => {
    const arr = [1, 3, 4, 5]
    expect(move(arr, 1, 3)).toEqual([1, 4, 5, 3])
  })

  it('findValueByKey', () => {
    const arr = [{ id: 1, name: 'k1' }, { id: 2, name: 'k2' }]
    const arr2: Array<{ id:  number; name: string }> = []
    const find = findValueByKey('id', 'name')
    expect(find(1, arr)).toBe('k1')
    expect(find('1', arr)).toBe('k1')
    expect(find(3, arr)).toBeUndefined()
    expect(find('k1', arr2)).toBeUndefined()
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
