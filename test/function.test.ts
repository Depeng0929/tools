import { describe, expect, it } from 'vitest'
import { tap } from '../src/index'

describe('function', () => {
  it('tap', () => {
    expect(tap(1, value => value++)).toEqual(1)
    expect(tap({ a: 1 }, obj => obj.a++)).toEqual({ a: 2 })
  })
})
