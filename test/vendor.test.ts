import { isEmpty } from 'rambda'
import { describe, expect, it } from 'vitest'
import { select } from '../src'

describe('vendor', () => {
  it('isEmpty', () => {
    expect(isEmpty({})).toBeTruthy()
    expect(isEmpty({ name: 'kdp' })).toBeFalsy()
  })

  it('select', () => {
    expect(select(['name', 'age'], [
      { name: 'kdp', age: 12, sex: 1 },
      { name: 'kdp2', age: 14, sex: 2 },
    ])).toEqual([
      { name: 'kdp', age: 12 },
      { name: 'kdp2', age: 14 },
    ])
  })
})
