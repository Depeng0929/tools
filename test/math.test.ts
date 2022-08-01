import { describe, expect, it } from 'vitest'
import { add, clamp, divide, equal, multiply, subtract, sum } from '../src/index'

describe('math', () => {
  it('add', () => {
    expect(add(0.3, 0.4)).toBe(0.7)
    expect(add(3, 4)).toBe(7)

    expect(add(3, '4')).toBe(7)
  })

  it('divide', () => {
    expect(divide(9, 5)).toBe(1.8)
    expect(divide(9, '5')).toBe(1.8)
  })

  it('subtract', () => {
    expect(subtract(9, 5)).toBe(4)
    expect(subtract(9, '5')).toBe(4)
  })

  it('multiply', () => {
    expect(multiply(9, 5)).toBe(45)
    expect(multiply(9, '5')).toBe(45)
  })

  it('sum', () => {
    expect(sum(1, 2, 3)).toBe(6)
    expect(sum(1, 2, '3')).toBe(6)
  })

  it('clamp', () => {
    expect(clamp(1, 2, 4)).toBe(2)
    expect(clamp(3, 2, 4)).toBe(3)
    expect(clamp(5, 2, 4)).toBe(4)
  })

  it('equal', () => {
    expect(equal(1, '1')).toBeTruthy()
    expect(equal(1, 1)).toBeTruthy()
    expect(equal(1, 0)).toBeFalsy()

    // test other type
    expect(equal({ name: 'kdp' }, { name: 'kdp' })).toBeTruthy()
  })
})
