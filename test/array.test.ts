import { describe, expect, it } from 'vitest'
import { uniq, range, at, remove, move } from '../src/index'

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
})
